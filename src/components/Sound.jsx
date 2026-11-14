"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useRef } from "react";
import { useAmbientAudio } from "./AmbientAudio";
export default function Sound() {
  const audio = useRef(null);
  const { enabled: playing, setEnabled: setPlaying } = useAmbientAudio();
  async function toggle() {
    if (playing) {
      audio.current.pause();
      setPlaying(false);
    } else {
      try {
        await audio.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  }
  return <div className="sound-control"><audio ref={audio} loop src="/audio/zapsplat_science_fiction_outer_space_atmopshere_hum_drone_98562.mp3" /><button onClick={toggle} aria-label={playing ? "Mute ambient sound" : "Play ambient sound"} aria-pressed={playing}>{playing ? <Volume2 size={17} /> : <VolumeX size={17} />}<span>AMBIENT {playing ? "ON" : "OFF"}</span></button></div>;
}
