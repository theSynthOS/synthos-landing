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
      "You open SynthOS and look through the available AI agents. You see one specialized for QuillFinance (designed to deposit, borrow, or manage funds within Quill’s Stability Pool). You select it because you want stable yields and the ability to borrow if needed.",
    content: (
      <div className="h-full w-full flex items-center justify-center ">
        <Image
          src="/1a.png"
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
      "Rather than scanning Quill docs directly, the agent relies on its **internally curated knowledge base** (which includes up-to-date parameters on Quill’s stability pool, interest rates, and borrowing limits). You type something like, “I have 500 USDC for the stability pool—what’s the best way to earn yield?” The agent reviews your request, factoring in current market data from its knowledge base, and proposes a plan (e.g., deposit 500 USDC into the stability pool or some combination of deposit + borrow).",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/2a.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Deploy with One Click",
    description: "Let AI manage trades, swaps, restaking, and more.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/3a.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Ongoing Monitoring & Adjustments",
    description:
      "Post-execution, the QuillFinance Agent continues to track interest rates, collateral health, and yield changes from its knowledge base. If better opportunities arise or if borrowing parameters need rebalancing, the agent will **prompt** you for another review-and-sign flow.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/4a.png"
          width={300}
          height={300}
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
        <h1 className="text-4xl font-bold text-center mb-10 text-yellow-700">How It Works</h1>
        <StickyScroll content={content} />
      </div>
    </div>
    {/* <div className="relative z-30 md:w-1/2 justify-center items-center h-[500px] hidden md:block">
        <ThreeScene />
      </div> */}
    </>
  );
}
