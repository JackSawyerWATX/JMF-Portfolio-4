"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useAmbientAudio } from "../AmbientAudio";
export default function Navigation() {
  const path = usePathname();
  const { playBeacon, stopBeacon } = useAmbientAudio();
  return <header className="site-header"><Link href="/" className="brand"><strong>JF<span>·</span></strong><span>JONATHAN FAUSSET</span></Link><nav aria-label="Main navigation">{[["/", "Home"], ["/about", "About"], ["/projects", "Projects"], ["/contact", "Contact"]].map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? "page" : undefined}>{label}</Link>)}</nav><Link href="/contact" className="header-contact" onMouseEnter={playBeacon} onMouseLeave={stopBeacon} onClick={stopBeacon}>Let’s Connect <ArrowRight size={16} /></Link></header>;
}
