import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import React from "react";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "BoringBalls™ - The Most Mundane Ping Pong Balls in the Galaxy",
  description:
    "Experience the ultimate in ping pong ball mediocrity. Our perfectly spherical, regulation-standard, aggressively boring ping pong balls will revolutionize your table tennis experience through sheer normalcy.",
  keywords: [
    "boring ping pong balls",
    "mundane table tennis",
    "ordinary sports equipment",
    "regulation ping pong balls",
    "synthwave sports",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} antialiased scan-lines retro-bg`}>
        {children}
      </body>
    </html>
  );
}
