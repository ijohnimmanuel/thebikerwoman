import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Biker Woman | Stunt Performer, Rider & Trainer",
  description:
    "Official portfolio of The Biker Woman — motorcycle stunt performer, riding and stunt trainer, and screen artist.",
  metadataBase: new URL("https://thebikerwoman.vercel.app"),
  openGraph: {
    title: "The Biker Woman | Official Artist Portfolio",
    description: "Motorcycle stunts. Cinema. Training. Fearless artistry.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
