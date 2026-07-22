import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Paweł Krauch — Filmmaker & Director",
    template: "%s — Paweł Krauch",
  },
  description:
    "Filmmaker and director crafting brand films, commercials, and cinematic content. Selected work, reel, and contact.",
  openGraph: {
    title: "Paweł Krauch — Filmmaker & Director",
    description:
      "Filmmaker and director crafting brand films, commercials, and cinematic content.",
    url: siteUrl,
    siteName: "Paweł Krauch",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paweł Krauch — Filmmaker & Director",
    description:
      "Filmmaker and director crafting brand films, commercials, and cinematic content.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
