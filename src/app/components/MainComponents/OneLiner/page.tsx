"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '../../../../../utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
//import { ThreeScene } from '../../threeJS/threeScene'

const OneLiner = () => {
  return (
    <div className="relative flex flex-col md:flex-row h-full w-full px-20 items-center justify-between">
      
      {/* Left Content (Text & Motion Elements) */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start justify-center mt-[100px] md:mt-[170px] z-[20] md:w-1/2"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            className="Welcome-box py-[8px] px-[4px] border border-yellow-600 opacity-[0.9] flex items-center"
            variants={slideInFromTop}
          >
            <SparklesIcon className="text-yellow-500 mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[16px] ">SynthOS - Automate Your Gains</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex flex-col gap-6 mt-6 font-bold text-yellow-600 w-auto h-auto text-[50px] md:text-[100px]"
        >
          SynthOS
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-[30px] md:text-[50px] text-pretty md:text-nowrap">
            The AI Agent Marketplace for DeFi
          </p>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1.3)}
          className="text-yellow-600 text-[25px]"
        >
          – Automate, Optimize, and Earn Effortlessly.
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1.6)}
          className="mt-6 text-yellow-600 text-[25px] border-2 border-yellow-500 px-4 py-2 rounded cursor-pointer"
        >
          Launch App
        </motion.div>
      </motion.div>

      {/* Right Side  */}
      <div className="w-1/2 flex items-center justify-center h-full hidden md:flex">
        <video src="/SynthOS.webm" autoPlay muted loop className="w-[70%] h-auto object-cover" />
      </div>
  

    </div>
  )
}

export default OneLiner
