'use client'
import { HowItWorks } from "./components/MainComponents/HowItWorks/page";
import { WhyAreWeHere } from "./components/MainComponents/WhyAreWeHere/page";
import OneLiner from "./components/MainComponents/OneLiner/page";
// import { ThreeScene } from "./components/threeJS/threeScene";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
           {/* Background Animation with preserved background color */}
      <motion.div 
        style={{ opacity:1 }} 
        className="absolute inset-0 bg-[rgb(255,252,218)]"
      >
        <BackgroundGradientAnimation containerClassName="absolute inset-0 z-0" />
      </motion.div>
        <div className="flex flex-col">
          <div className="h-screen snap-start">
            <OneLiner />
          </div>

          <div className=" snap-start">
            <WhyAreWeHere />
            <HowItWorks />
          </div>

        </div>
    </main>
  );
}

// 
// <WhyAreWeHere />