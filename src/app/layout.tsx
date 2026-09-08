import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RehabPT Recovery Lab | Costa Mesa Physical Therapy + Recovery",
  description:
    "Physical therapy and advanced recovery services in Costa Mesa. Sauna, cold plunge, HBOT, compression, red light, and shockwave — backed by a real PT practice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
