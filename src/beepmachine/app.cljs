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
          :octave 4
          :notes ["A" "B" "C#" "E" "F#"]
          :note-idx 0}
         :beat
         {:synth (.chain (js/Tone.MembraneSynth.) (js/Tone.Volume. 10) js/Tone.Master)
          :spacing 8
          :duration 4}}))

;; rendering

(defcomponent app [data owner]
  (render [_]
    (dom/h1 "beepmachine")))

;; main lifecycle

(defn handle-keydown! [ev]
  (.preventDefault ev)
  (.stopPropagation ev)
  (prn {:type :keydown :key (.-key ev) :char (.-char ev)}))

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
            note (str (nth notes note-idx) (:octave plink))
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
