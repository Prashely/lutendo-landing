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

export const metadata: Metadata = {
  title: "Lutendo Business Supplies",
  description:
    "Lutendo Business Supplies - Your one-stop shop for all business needs.",
  openGraph: {
    title: "Lutendo Business Supplies — Launching Soon",
    description:
      "Lutendo Business Supplies - Your one-stop shop for all business needs.",
    url: "https://lutendobusinesssupplies.com/",
    images: [
      {
        url: "https://lutendobusinesssupplies.com/favicon.png",
        width: 800,
        height: 600,
        alt: "Lutendo Business Supplies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lutendo Business Supplies — Launching Soon",
    description:
      "Lutendo Business Supplies - Your one-stop shop for all business needs.",
    images: ["https://lutendobusinesssupplies.com/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
