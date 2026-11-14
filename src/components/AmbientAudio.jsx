"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const AmbientContext = createContext(null);

export function AmbientAudioProvider({ children }) {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const context = useRef(null);

  const playBeacon = useCallback(() => setHovered(true), []);
  const stopBeacon = useCallback(() => setHovered(false), []);

  useEffect(() => {
    window.addEventListener("blur", stopBeacon);
    const hide = () => { if (document.hidden) stopBeacon(); };
    document.addEventListener("visibilitychange", hide);
    return () => {
      window.removeEventListener("blur", stopBeacon);
      document.removeEventListener("visibilitychange", hide);
    };
  }, [stopBeacon]);

  useEffect(() => {
    if (!enabled || !hovered) return;
    let cancelled = false;
    let activeTone = null;

    async function beep() {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        context.current ??= new AudioContext();
        const audioContext = context.current;
        if (audioContext.state !== "running") await audioContext.resume();
        if (cancelled || audioContext.state !== "running") return;

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const now = audioContext.currentTime;
        // Sputnik-style radio tone: steady pitch, short on/off envelope.
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(1061, now);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.065, now + 0.008);
        gain.gain.setValueAtTime(0.065, now + 0.21);
        gain.gain.linearRampToValueAtTime(0, now + 0.225);
        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        const tone = { oscillator, gain };
        activeTone = tone;
        oscillator.onended = () => {
          oscillator.disconnect();
          gain.disconnect();
          if (activeTone === tone) activeTone = null;
        };
        oscillator.start(now);
        oscillator.stop(now + 0.23);
      } catch {
        // Audio availability must never interfere with navigation.
      }
    }

    void beep();
    const timer = window.setInterval(beep, 3000);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
      if (activeTone && context.current) {
        const now = context.current.currentTime;
        activeTone.gain.gain.cancelScheduledValues(now);
        activeTone.gain.gain.setTargetAtTime(0, now, 0.005);
      }
    };
  }, [enabled, hovered]);

  useEffect(() => () => {
    context.current?.close().catch(() => {});
  }, []);

  return <AmbientContext.Provider value={{ enabled, setEnabled, playBeacon, stopBeacon }}>{children}</AmbientContext.Provider>;
}

export function useAmbientAudio() {
  return useContext(AmbientContext);
}
