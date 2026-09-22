import type { Metadata } from "next";
import "./globals.css";
import ScrollAnimator from "./components/scroll-animator";
import LaunchCountdown from "./components/launch-countdown";

export const metadata: Metadata = {
  title: "Slay Agency",
  description: "Creative & digital production agency",
  icons: {
    icon: "/fav.svg",
    shortcut: "/fav.svg",
    apple: "/fav.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="icon" href="/fav.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Geist:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Square+Peg&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-body bg-[#F5F4F3] text-[#242424]">
        <ScrollAnimator />
        <LaunchCountdown>
          {children}
        </LaunchCountdown>
      </body>
    </html>
  );
}
