import { Github, Linkedin, Facebook, FileDown, Cloud, Orbit } from "lucide-react";

const icons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  BlueSky: Cloud,
  Resume: FileDown,
  Facebook,
  "Syntronic Labs": Orbit,
};

export default function FooterIcon({ label }) {
  const Icon = icons[label] || Orbit;
  return <Icon size={15} strokeWidth={1.5} aria-hidden="true" />;
}
