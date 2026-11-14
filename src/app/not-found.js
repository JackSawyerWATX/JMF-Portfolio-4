"use client";

import Link from "next/link";
import { ArrowLeft, Orbit, Radio } from "lucide-react";
import { useEffect, useRef } from "react";
import { useAmbientAudio } from "@/components/AmbientAudio";

export default function NotFound() {
  const { enabled } = useAmbientAudio();
  const audio = useRef(null);
  const played = useRef(false);

  useEffect(() => {
    const clip = audio.current;
    if (!enabled) {
      clip.pause();
      return;
    }
    if (played.current) return;
    let cancelled = false;
    clip.volume = 0.65;
    clip.play().then(() => {
      if (cancelled) clip.pause();
      else played.current = true;
    }).catch(() => {
      // A browser audio restriction must not block the recovery links.
    });
    return () => {
      cancelled = true;
      clip.pause();
    };
  }, [enabled]);

  return (
    <main className="lost-page">
      <audio ref={audio} src="/audio/apollo13-houston-problem.mp3" preload="none" />
      <div className="lost-orbit" aria-hidden="true"><Orbit strokeWidth={0.7} /></div>
      <section className="lost-content" aria-labelledby="lost-heading">
        <p className="eyebrow"><Radio size={14} aria-hidden="true" /> SIGNAL LOST / 404</p>
        <p className="lost-number" aria-hidden="true">404</p>
        <h1 id="lost-heading">Houston, we have<br /><span>a problem!</span></h1>
        <p className="page-intro">This page is outside our orbit. It may have moved, or the address may be incorrect. Let’s get you back on course.</p>
        <div className="hero-actions">
          <Link href="/" className="primary-link"><ArrowLeft size={17} aria-hidden="true" />Back to Home</Link>
          <Link href="/projects" className="text-link"><Orbit size={17} aria-hidden="true" />Explore My Work</Link>
        </div>
      </section>
    </main>
  );
}
