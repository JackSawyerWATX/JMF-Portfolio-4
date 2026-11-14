import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Sound from "@/components/Sound";
import Navigation from "@/components/navigation";
import { AmbientAudioProvider } from "@/components/AmbientAudio";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});
export const metadata = {
  title: "Jonathan Fausset",
  description: "Portfolio Website"
};
export const viewport = {
  width: "device-width",
  initialScale: 1
};
export default function RootLayout({
  children
}) {
  return <html lang="en">
            <body className={clsx(inter.variable, "bg-background text-foreground font-inter touch-pan-y")}>
                <a href="#page-content" className="skip-link">Skip to content</a>
                <AmbientAudioProvider>
                <Navigation />
                <div id="page-content">{children}</div>
                <Sound />
                </AmbientAudioProvider>
                <div id="my-modal" />
            </body>
        </html>;
}
