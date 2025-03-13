'use client'
import HowItWorks from "./components/MainComponents/HowItWorks/page";
import WhyAreWeHere from "./components/MainComponents/WhyAreWeHere/page";
import OneLiner from "./components/MainComponents/OneLiner/page";
// import { ThreeScene } from "./components/threeJS/threeScene";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { motion } from "framer-motion";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";
import React from "react";
import { Footer } from "./components/footer";

export default function Home() {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 text-nowrap">
        <Menu setActive={setActive} >
          <HoveredLink href="https://thesynthos.notion.site/" target="_blank">
            <MenuItem setActive={setActive} active={active} item="Docs" />
          </HoveredLink>

          <HoveredLink href="https://app.synthos.fun/" target="_blank">
            <MenuItem setActive={setActive} active={active} item="Launch_App" />
          </HoveredLink>
        </Menu>
      </div>

      <motion.div 
        style={{ opacity:1 }} 
        className="absolute inset-0 "
      >
        <BackgroundGradientAnimation containerClassName="absolute inset-0 z-0" />
      </motion.div>
        <div className="flex flex-col">
          <div className="lg:h-screen snap-start">
            <OneLiner />
          </div>
          <div className="snap-start"><WhyAreWeHere /></div>
          <div className="snap-start"><HowItWorks /></div>
          <Footer />
          
        </div>
    </main>
  );
}

// 
// <WhyAreWeHere />