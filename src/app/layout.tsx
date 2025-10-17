import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
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

// Separate viewport export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Silksong 100% Completion Checklists",
  description:
    "The ultimate Hollow Knight: Silksong 100% completion checklist. Track every skill, mask, and upgrade with interactive progress tracker.",
  metadataBase: new URL("https://silksongchecklists.com"),
  keywords: [
    "Hollow Knight Silksong checklist",
    "Silksong 100% completion",
    "Silksong tracker",
    "Hollow Knight Silksong guide",
    "Silksong collectibles tracker",
  ],
  alternates: {
    canonical: "https://silksongchecklists.com",
  },
  openGraph: {
    title: "Silksong 100% Completion Checklists",
    description:
      "The ultimate Hollow Knight: Silksong 100% completion checklist. Track every skill, mask, and upgrade with interactive progress tracker.",
    url: "https://silksongchecklists.com",
    siteName: "Silksong 100% Completion Checklists",
    images: [
      {
        url: "https://silksongchecklists.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Silksong 100% Completion Checklists",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silksong 100% Completion Checklists",
    description:
      "The ultimate Hollow Knight: Silksong 100% completion checklist. Track every skill, mask, and upgrade with interactive progress tracker.",
    images: ["https://silksongchecklists.com/preview.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon-64x64.ico", sizes: "64x64", type: "image/x-icon" },
      { url: "/favicon-128x128.ico", sizes: "128x128", type: "image/x-icon" },
      { url: "/favicon-192x192.ico", sizes: "192x192", type: "image/x-icon" },
      { url: "/favicon-256x256.ico", sizes: "256x256", type: "image/x-icon" },
      { url: "/favicon.ico" }, // fallback for legacy browsers
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
