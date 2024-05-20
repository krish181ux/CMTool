import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
import {Header, Hero} from "@/components"

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CultureIQ",
  description: "Measure, Understand & Improve",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        {/* Header */}
        <Header/>
        <br></br>
        <br></br>
        <br></br>
        {children}
        {/* hero */}
      </body>
    </html>
  );
}
