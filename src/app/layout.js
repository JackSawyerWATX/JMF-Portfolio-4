import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Sound from "@/components/Sound";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata = {
    title: "Jonathan Fausset",
    description: "Portfolio Website",
    viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
                {children}
                <Sound />
                <div id="my-modal" />
            </body>
        </html>
    );
}
