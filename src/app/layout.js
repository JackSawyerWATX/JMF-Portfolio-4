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
  title: "Jonathan Fausset | Web Developer & Software Engineer",
  description:
    "Explore the portfolio of Jonathan Fausset, a web developer and software engineer building thoughtful digital experiences with modern web technologies.",
  applicationName: "Jonathan Fausset Portfolio",
  authors: [{ name: "Jonathan Fausset" }],
  creator: "Jonathan Fausset",
  keywords: [
    "Jonathan Fausset",
    "Jonathan Fausset portfolio",
    "Jonathan Fausset software engineer",
    "Jonathan Fausset web developer"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Jonathan Fausset Portfolio",
    title: "Jonathan Fausset | Web Developer & Software Engineer",
    description:
      "Explore the portfolio of Jonathan Fausset, a web developer and software engineer building thoughtful digital experiences with modern web technologies."
  },
  twitter: {
    card: "summary",
    title: "Jonathan Fausset | Web Developer & Software Engineer",
    description:
      "Explore the portfolio of Jonathan Fausset, a web developer and software engineer building thoughtful digital experiences with modern web technologies."
  },
  robots: {
    index: true,
    follow: true
  }
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
