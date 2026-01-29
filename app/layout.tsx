import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SnackbarProvider from "./provider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: "Idea2Impact 2026 – National Hackathon | Free Registration",
  description:
    "Register for Idea2Impact 2026, a national-level hackathon where students and tech enthusiasts turn ideas into real-world impact. Free registration. Win prizes, mentorship, and recognition.",

  keywords: [
    "Idea2Impact",
    "Hackathon 2026",
    "National Hackathon",
    "Student Hackathon India",
    "Free Hackathon Registration",
    "Coding Competition",
    "Innovation Challenge",
    "Engineering Hackathon",
    "Tech Hackathon India",
  ],

  authors: [{ name: "Idea2Impact Team" }],
  creator: "Idea2Impact",
  publisher: "Idea2Impact",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Idea2Impact 2026 – National Hackathon",
    description:
      "Join Idea2Impact 2026, a national hackathon to build real-world solutions. Free registration, exciting prizes, mentorship, and career opportunities.",
    url: "https://idea2impact.vercel.app",
    siteName: "Idea2Impact",
    images: [
      {
        url: "https://idea2impact.vercel.app/og-image.png", // add later
        width: 1200,
        height: 630,
        alt: "Idea2Impact 2026 National Hackathon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Idea2Impact 2026 – National Hackathon",
    description:
      "Register now for Idea2Impact 2026. Build, innovate, and create real impact. Free national-level hackathon.",
    images: ["https://idea2impact.vercel.app/og-image.png"],
  },

  alternates: {
    canonical: "https://idea2impact.vercel.app",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
       <SnackbarProvider>
          {children}
        </SnackbarProvider>
      </body>
    </html>
  );
}
