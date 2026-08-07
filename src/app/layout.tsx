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
  title: "UDARA — Una revista entre amigos",

  description:
    "Una web entre amigos para inmortalizar nuestros momentos, nuestras historias y todo lo que somos.",

  keywords: [
    "UDARA",
    "revista",
    "revista digital",
    "revista entre amigos",
    "moda",
    "cultura",
    "fotografía",
    "historias",
  ],

  authors: [
    {
      name: "UDARA",
    },
  ],

  creator: "UDARA",
  publisher: "UDARA",

  metadataBase: new URL("https://udaraa.vercel.app"),

  openGraph: {
    title: "UDARA — Una revista entre amigos",
    description:
      "Una web entre amigos para inmortalizar nuestros momentos, nuestras historias y todo lo que somos.",
    url: "https://udaraa.vercel.app",
    siteName: "UDARA",
    locale: "es_ES",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}