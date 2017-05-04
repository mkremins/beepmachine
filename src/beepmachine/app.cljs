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

(defn should-play? [instrument tick]
  (zero? (mod tick (:spacing instrument))))

(defn play! [{:keys [synth duration]} note time]
  (.triggerAttackRelease synth note (ticks->note-length duration) time))

;; state

(defonce app-state
  (atom {:tick 0
         :plink
         {:synth (.toMaster (js/Tone.Synth.))
          :spacing 4
          :duration 2
          :notes [5 6 7 8 9]
          :note-idx 0}
         :beat
         {:synth (.chain (js/Tone.MembraneSynth.) (js/Tone.Volume. 10) js/Tone.Master)
          :spacing 8
          :duration 4}}))

(defn double-beat-spacing [state]
  (update-in state [:beat :spacing] #(if (>= % 32) % (* % 2))))

(defn halve-beat-spacing [state]
  (update-in state [:beat :spacing] #(/ % 2)))

(defn shift-plinks-up-1 [state]
  (update-in state [:plink :notes] #(mapv inc %)))

(defn shift-plinks-down-1 [state]
  (update-in state [:plink :notes] #(mapv dec %)))

(defn shuffle-plinks [state]
  (update-in state [:plink :notes] (comp vec shuffle)))

(defn reverse-plinks [state]
  (update-in state [:plink :notes] (comp vec reverse)))

;; rendering

(defcomponent app [data owner]
  (render [_]
    (dom/h1 "beepmachine")))

;; main lifecycle

(def keybinds
  {"d" double-beat-spacing
   "h" halve-beat-spacing
   "q" shuffle-plinks
   "r" reverse-plinks
   "ArrowUp" shift-plinks-up-1
   "ArrowDown" shift-plinks-down-1})

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
    (display-key! (.-key ev))))

(defn handle-keyup! [ev]
  (.preventDefault ev)
  (.stopPropagation ev)
  (prn {:type :keyup :key (.-key ev) :char (.-char ev)}))

(defn tick! [time]
  (let [{:keys [tick plink beat] :as state} @app-state]
    (prn tick)
    ;; PLINK
    (when (should-play? plink tick)
      (println "play plink")
      (let [{:keys [notes note-idx]} plink
            note (note-id->note (nth notes note-idx))
            next-idx (if (>= note-idx (dec (count notes))) 0 (inc note-idx))]
        (play! plink note time)
        (swap! app-state assoc-in [:plink :note-idx] next-idx)))
    ;; BEAT
    (when (should-play? beat tick)
      (println "play beat")
      (play! beat "C#2" time)))
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
