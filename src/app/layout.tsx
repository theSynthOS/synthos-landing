import type { Metadata } from "next";
import { Gluten } from "next/font/google";
import "./globals.css";

const gluten = Gluten({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SynthOS",
  description: "AI Marketplace for DeFi Agents",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gluten.className} overflow-x-hidden overflow-y-scroll`}
      >
        {children}
      </body>
    </html>
  );
}
