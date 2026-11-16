"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef } from "react";
import { useAmbientAudio } from "./AmbientAudio";
export default function Sound() {
  const audio = useRef(null);
  const { enabled: playing, setEnabled: setPlaying } = useAmbientAudio();
  useEffect(() => {
    const clip = audio.current;
    if (!playing) {
      clip.pause();
      return;
    }
    const resume = () => {
      if (clip.paused) void clip.play().catch(() => {});
    };
    resume();
    // Browsers may require a gesture after a reload; retain the saved ON preference.
    window.addEventListener("pointerdown", resume);
    window.addEventListener("keydown", resume);
    return () => {
      window.removeEventListener("pointerdown", resume);
      window.removeEventListener("keydown", resume);
      clip.pause();
    };
  }, [playing]);

  function toggle() {
    setPlaying(!playing);
    if (playing) audio.current.pause();
    else void audio.current.play().catch(() => {});
  }
  return <div className="sound-control"><audio ref={audio} loop src="/audio/zapsplat_science_fiction_outer_space_atmopshere_hum_drone_98562.mp3" /><button onClick={toggle} aria-label={playing ? "Mute ambient sound" : "Play ambient sound"} aria-pressed={playing}>{playing ? <Volume2 size={17} /> : <VolumeX size={17} />}<span>AMBIENT {playing ? "ON" : "OFF"}</span></button></div>;
}
