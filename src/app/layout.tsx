import type { Metadata } from "next";
import { Gluten } from "next/font/google";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const gluten = Gluten({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SynthOS",
  description: "AI Marketplace for DeFi Agents",
  icons: {
    icon: "/logo.jpeg",
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
        className={`${gluten.className} overflow-x-hidden overflow-y-scroll mx-2 `}
      >
        {children}
      </body>
    </html>
  );
}
