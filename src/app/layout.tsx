import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Livvy - Your Compassionate Recovery Companion",
  description:
    "Livvy is an iOS app that supports your recovery journey with AI-powered companionship, CBT tools, sobriety tracking, journaling, and gamified progress.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
