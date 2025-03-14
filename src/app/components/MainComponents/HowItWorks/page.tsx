"use client";
import React from "react";
import { StickyScroll } from "../../../../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../../../../../utils/motion";
//import { ThreeScene } from "../../threeJS/threeScene";

const content = [
  {
    title: "Start & Browse DeFi Agent",
    description:
      "Choose the agent you want to use.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <Image
          src="/ui.png"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Chat & Strategy Proposal",
    description:
      "Tell the agent what you want to do. Let the heavy processing be done by the agent.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/chatbot.png"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
  {
    title: "Ongoing Monitoring & Adjustments",
    description:
      "The agent will continue to monitor the market and adjust your strategy as needed.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/log.png"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <>
     <div className="relative h-full ">
      <div className="relative z-10 mb-[10%]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:mb-10 text-yellow-500">How It Works</h1>
        <StickyScroll content={content} />
      </div>
    </div>
    {/* <div className="relative z-30 md:w-1/2 justify-center items-center h-[500px] hidden md:block">
        <ThreeScene />
      </div> */}
    </>
  );
}
