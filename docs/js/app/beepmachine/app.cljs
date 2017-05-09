(ns beepmachine.app
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [tonejs]))

;; notes & instruments

(def ticks->note-length
  { 1 "32n"
    2 "16n"
    4 "8n"
    8 "4n"
   16 "2n"
   32 "1n"})

(defn note-id->note [id]
  (let [octave (+ (quot id 5) 2)
        letter (nth ["A" "B" "C#" "E" "F#"] (mod id 5))]
    (str letter octave)))

(defn inc-pitch-or-wrap [note]
  (update note :pitch #(if (> % 29) 0 (inc %))))

(defn dec-pitch-or-wrap [note]
  (update note :pitch #(if (< % 1) 29 (dec %))))

(defn should-play? [instrument tick]
  (zero? (mod tick (:spacing instrument))))

(defn play! [{:keys [synth]} {:keys [pitch duration]} time]
  (.triggerAttackRelease synth
    (if (string? pitch) pitch (note-id->note pitch))
    (ticks->note-length duration)
    time))

;; state

(defonce app-state
  (atom {:tick 0
         :plink
         {:synth (.toMaster (js/Tone.Synth.))
          :spacing 4
          :notes [{:pitch 5 :duration 2}
                  {:pitch 6 :duration 2}
                  {:pitch 7 :duration 2}
                  {:pitch 8 :duration 2}
                  {:pitch 9 :duration 2}]
          :note-idx 0}
         :beat
         {:synth (.chain (js/Tone.MembraneSynth.) (js/Tone.Volume. 10) js/Tone.Master)
          :spacing 8
          :duration 4}}))

(defn clear-state [state]
  (-> state
      (update :plink merge
        {:spacing 4
         :notes [{:pitch 5 :duration 2}
                 {:pitch 6 :duration 2}
                 {:pitch 7 :duration 2}
                 {:pitch 8 :duration 2}
                 {:pitch 9 :duration 2}]})
      (update :beat merge
        {:spacing 8
         :duration 4})))

(defn raise-lowest-plink [state]
  (update-in state [:plink :notes]
    (fn [notes]
      (if (empty? notes)
        []
        (let [lowest-pitch (apply min (map :pitch notes))]
          (mapv (fn [note]
                  (if (= (:pitch note) lowest-pitch)
                    (inc-pitch-or-wrap note)
                    note))
                notes))))))

(defn lower-highest-plink [state]
  (update-in state [:plink :notes]
    (fn [notes]
      (if (empty? notes)
        []
        (let [highest-pitch (apply max (map :pitch notes))]
          (mapv (fn [note]
                  (if (= (:pitch note) highest-pitch)
                    (dec-pitch-or-wrap note)
                    note))
                notes))))))

(defn double-beat-spacing [state]
  (update-in state [:beat :spacing] #(if (>= % 32) % (* % 2))))

(defn halve-beat-spacing [state]
  (update-in state [:beat :spacing] #(/ % 2)))

(defn shift-plinks-up-1 [state]
  (update-in state [:plink :notes] #(mapv inc-pitch-or-wrap %)))

(defn shift-plinks-down-1 [state]
  (update-in state [:plink :notes] #(mapv dec-pitch-or-wrap %)))

(defn shuffle-plinks [state]
  (update-in state [:plink :notes] (comp vec shuffle)))

(defn reverse-plinks [state]
  (update-in state [:plink :notes] (comp vec reverse)))

(defn drop-last-plink [state]
  (update-in state [:plink :notes] #(if (empty? %) % (pop %))))

(defn push-last-plink [state]
  (update-in state [:plink :notes]
    #(conj % (if (empty? %)
               {:pitch 5 :duration 2}
               (inc-pitch-or-wrap (peek %))))))

(defn extend-first-short-plink [state]
  (update-in state [:plink :notes]
    (fn [notes]
      (if (empty? notes)
        []
        (let [avg-duration (/ (reduce + (map :duration notes)) (count notes))
              idx (loop [i 0]
                    (if (<= (:duration (nth notes i)) avg-duration)
                      i
                      (recur (inc i))))]
          (update-in notes [idx :duration] #(* % 2)))))))

(defn shorten-first-long-plink [state]
  (update-in state [:plink :notes]
    (fn [notes]
      (if (empty? notes)
        []
        (let [avg-duration (/ (reduce + (map :duration notes)) (count notes))
              idx (loop [i 0]
                    (if (>= (:duration (nth notes i)) avg-duration)
                      i
                      (recur (inc i))))]
          (update-in notes [idx :duration] #(if (> % 1) (/ % 2) %)))))))

;; rendering

(defcomponent app [data owner]
  (render [_]
    (dom/h1 "beepmachine")))

;; main lifecycle

(def charmap
  {"ArrowUp" "↑"
   "ArrowDown" "↓"
   "ArrowLeft" "←"
   "ArrowRight" "→"})

(def keybinds
  {"a" raise-lowest-plink
   "c" clear-state
   "d" double-beat-spacing
   "e" extend-first-short-plink
   "h" halve-beat-spacing
   "q" shuffle-plinks
   "r" reverse-plinks
   "s" shorten-first-long-plink
   "z" lower-highest-plink
   "ArrowUp" shift-plinks-up-1
   "ArrowDown" shift-plinks-down-1
   "ArrowLeft" drop-last-plink
   "ArrowRight" push-last-plink})

(defn display-key! [k]
  (let [div (js/document.createElement "div")]
    (.add (.-classList div) "key")
    (set! (.-textContent div) k)
    (set! (.-left (.-style div)) (str (rand-int js/window.innerWidth) "px"))
    (set! (.-top (.-style div)) (str (rand-int js/window.innerHeight) "px"))
    (js/document.body.appendChild div)))

(defn handle-keydown! [ev]
  (.preventDefault ev)
  (.stopPropagation ev)
  (prn {:type :keydown :key (.-key ev) :char (.-char ev)})
  (when-let [keybind (get keybinds (.-key ev))]
    (swap! app-state keybind)
    (display-key! (get charmap (.-key ev) (.-key ev)))))

(defn handle-keyup! [ev]
  (.preventDefault ev)
  (.stopPropagation ev)
  (prn {:type :keyup :key (.-key ev) :char (.-char ev)}))

(defn tick! [time]
  (let [{:keys [tick plink beat] :as state} @app-state]
    ;; PLINK
    (when (should-play? plink tick)
      (let [{:keys [notes note-idx]} plink
            note (get notes note-idx nil) 
            next-idx (if (>= note-idx (dec (count notes))) 0 (inc note-idx))]
        (when note
          (play! plink note time))
        (swap! app-state assoc-in [:plink :note-idx] next-idx)))
    ;; BEAT
    (when (should-play? beat tick)
      (play! beat {:pitch "C#2" :duration 4} time)))
  (swap! app-state update :tick inc))

(defn init! []
  (enable-console-print!)
  ;; set up and start Tone.js loop
  (let [tone-loop (js/Tone.Loop. tick!)]
    (set! (.-interval tone-loop) "32n")
    (.start tone-loop 0))
  (js/Tone.Transport.start)
  ;; set up keyboard event handlers
  (set! (.-onkeydown js/document) handle-keydown!)
  (set! (.-onkeyup js/document) handle-keyup!)
  ;(om/root app app-state {:target (js/document.getElementById "app")})
  )

(init!)
