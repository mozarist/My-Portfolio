import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/ui/lenisprovide";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mozarist.my.id'),
  title: "Mozarist",
  description: "Fullstack Web Developer specializing in building fast, scalable, and seamless web applications. Discover my work and lets build something great.",
  keywords: [
    "Ahmad Azzam Mozarist",
    "Mozarist",
    "Fullstack Developer",
    "UI/UX Designer",
    "Web Developer Indonesia",
    "Next.js Developer",
  ],
  authors: [{ name: "Ahmad Azzam Mozarist", url: "https://mozarist.my.id" }],
  creator: "Ahmad Azzam Mozarist",
  openGraph: {
    title: 'Mozarist – Fullstack Web Developer',
    description:
      'I build seamless, high-performance web applications tailored to your needs. Specializing in modern frontend & scalable backend systems.',
    url: 'https://mozarist.my.id',
    siteName: 'Mozarist',
    images: [
      {
        url: 'https://mozarist.my.id/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mozarist – Fullstack Web Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <TooltipProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
