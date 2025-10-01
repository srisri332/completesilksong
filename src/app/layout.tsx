import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Silksong Completion Checklists",
  description:
    "Track your Hollow Knight: Silksong completion progress with checklists.",
  icons: {
    icon: [
      { url: "/favicon-16x16.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon-24x24.ico", sizes: "24x24", type: "image/x-icon" },
      { url: "/favicon-32x32.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon-48x48.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-64x64.ico", sizes: "64x64", type: "image/x-icon" },
      { url: "/favicon-96x96.ico", sizes: "96x96", type: "image/x-icon" },
      { url: "/favicon-128x128.ico", sizes: "128x128", type: "image/x-icon" },
      { url: "/favicon-192x192.ico", sizes: "192x192", type: "image/x-icon" },
      { url: "/favicon-256x256.ico", sizes: "256x256", type: "image/x-icon" },
      { url: "/favicon.ico" }, // fallback for legacy browsers
    ],
  },
  openGraph: {
    title: "Silksong Checklists",
    description:
      "Track your Hollow Knight: Silksong completion progress with checklists.",
    url: "https://silksongchecklists.com",
    siteName: "Silksong Checklists",
    images: [
      {
        url: "https://silksongchecklists.com/preview.png",
        width: 1200,
        height: 630,
        alt: "Silksong Checklists Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silksong Checklists",
    description:
      "Track your Hollow Knight: Silksong completion progress with checklists.",
    images: ["https://silksongchecklists.com/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
