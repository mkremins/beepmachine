(ns beepmachine.app
  (:require [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom]
            [tonejs]))

(defonce app-state
  (atom {:tick 0}))

(defcomponent app [data owner]
  (render [_]
    (dom/h1 "beepmachine")))

(defn init! []
  (enable-console-print!)
  (let [plink (.toMaster (js/Tone.Synth.))
        beat (.toMaster (js/Tone.Synth.))
        tone-loop (js/Tone.Loop.
                    (fn [t]
                      (let [tick (:tick @app-state)]
                        (prn tick)
                        ;; PLINK
                        (let [note (nth ["A" "B" "C#" "E" "F#"] (mod tick 5))]
                          (.triggerAttackRelease plink (str note "4") "8n" t))
                        ;; BEAT
                        (when (= (mod (:tick @app-state) 2) 0)
                          (.triggerAttackRelease beat "C#1" "8n" t)))
                      (swap! app-state update :tick inc)))]
    (set! (.-interval tone-loop) "16n")
    (.start tone-loop 0))
  (js/Tone.Transport.start)
  (om/root app app-state {:target (js/document.getElementById "app")}))

(init!)
