"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "../../../../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <div className="relative h-full w-full">
      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col md:flex-row h-full w-full  items-center justify-between px-10"
      >
        {/* Left Content (Text & Motion Elements) */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start justify-center mt-[120px] md:mt-[100px] z-[20] md:w-1/2"
        >
          <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div
              className="Welcome-box py-[8px] px-[4px] border border-yellow-600 opacity-[0.9] flex items-center"
              variants={slideInFromTop}
            >
              <SparklesIcon className="text-yellow-500 mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[16px] ">
                SynthOS - Automate Your Gains
              </h1>
            </motion.div>
          </div>

          <motion.div
            variants={slideInFromLeft(0.8)}
            className="flex flex-col gap-6 mt-6 font-bold text-yellow-500 w-auto h-auto text-[40px] md:text-[60px] lg:text-[100px]"
          >
            SynthOS
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-[30px] md:text-[40px] lg:text-[50px] text-pretty md:text-nowrap">
              Scroll&apos;s #1 Verifiable DeFAI Agent Marketplace
            </p>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(1.3)}
            className="text-yellow-600 text-[20px] md:text-[25px] lg:text-[30px]"
          >
            – Automate, Optimize, and Earn Effortlessly.
          </motion.div>

          <motion.div
            variants={slideInFromLeft(1.6)}
            className="mt-6 cursor-pointer"
          >
            <Link
              href="https://app.synthos.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-yellow-600 text-[25px] border-2 border-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-white transition-colors"
            >
              Launch App
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
