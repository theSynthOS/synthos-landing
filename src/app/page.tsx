'use client'
import HowItWorks from "./components/MainComponents/HowItWorks/page";
import { motion } from "framer-motion";
import React from "react";
import { Footer } from "./components/footer";
import HeroSection from "./components/MainComponents/HeroSection/page";
import Navbar from "./components/navbar";

export default function Home() {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      <Navbar />

      <motion.div 
        style={{ opacity:1 }} 
        className="absolute inset-0 "
      >
      </motion.div>
      
      <div className="flex flex-col pt-16">
        <div className="lg:h-screen snap-start">
          <HeroSection />
        </div>
        <div className="snap-start" id="how-it-works">
          <HowItWorks />
        </div>
        <Footer />
      </div>
    </main>
  );
}

// 
// <WhyAreWeHere />