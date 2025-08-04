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

export const metadata = {
  title: "Lutendo Business Supplies",
  description:
    "Lutendo Business Supplies - Your one-stop shop for all business needs.",
};

export default function RootLayout({ children }) {
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

        {/* Meta Tags for WhatsApp, Facebook, Twitter */}
        <meta
          name="title"
          content="Lutendo Business Supplies — Launching Soon"
        />
        <meta
          name="description"
          content="Lutendo Business Supplies - Your one-stop shop for all business needs."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://lutendobusinesssupplies.com/"
        />
        <meta
          property="og:title"
          content="Lutendo Business Supplies — Launching Soon"
        />
        <meta
          property="og:description"
          content="Lutendo Business Supplies - Your one-stop shop for all business needs."
        />
        <meta
          property="og:image"
          content="https://lutendobusinesssupplies.com/favicon.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://lutendobusinesssupplies.com/"
        />
        <meta
          name="twitter:title"
          content="Lutendo Business Supplies — Launching Soon"
        />
        <meta
          name="twitter:description"
          content="Lutendo Business Supplies - Your one-stop shop for all business needs."
        />
        <meta
          name="twitter:image"
          content="https://lutendobusinesssupplies.com/favicon.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
