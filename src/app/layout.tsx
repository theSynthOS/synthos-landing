import type { Metadata } from "next";
import { Gluten, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const gluten = Gluten({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SynthOS - Scroll's #1 Verifiable DeFAI Agent Marketplace",
  description: "Scroll's #1 Verifiable DeFAI Agent Marketplace",
  icons: {
    icon: "/logo.png",
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
        className={`${space_grotesk.className} overflow-x-hidden overflow-y-scroll mx-2 `}
      >
        {children}
      </body>
    </html>
  );
}
