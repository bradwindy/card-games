import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  title: "Card Game Rules - Learn to Play Classic Card Games",
  description: "Learn to play classic card games with detailed rules and instructions. Filter by number of players and complexity. Works offline!",
  applicationName: "Card Game Rules",
  keywords: ["card games", "rules", "poker", "rummy", "hearts", "spades", "blackjack", "bridge", "game instructions"],
  authors: [{ name: "Card Game Rules" }],
  creator: "Card Game Rules",
  publisher: "Card Game Rules",
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Card Game Rules",
  },
  openGraph: {
    type: "website",
    siteName: "Card Game Rules",
    title: "Card Game Rules - Learn to Play Classic Card Games",
    description: "Learn to play classic card games with detailed rules and instructions. Works offline!",
  },
  twitter: {
    card: "summary",
    title: "Card Game Rules - Learn to Play Classic Card Games",
    description: "Learn to play classic card games with detailed rules and instructions. Works offline!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
