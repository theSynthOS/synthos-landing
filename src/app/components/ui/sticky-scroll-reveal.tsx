"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // const backgroundColors = [
  //   "blue",
  //   "black",
  //   "green",
  //   "purple",
  // ];

  const backgroundColors = [
  "rgba(249, 255, 158, 0.8)", 
  "rgba(246, 255, 106, 0.8)",       
  "rgba(243, 255, 66, 0.8)",   
  "rgba(240, 255, 8, 0.8)",  
];

// Random white pattern backgrounds
const randomPatternBackgrounds = [
  "radial-gradient(circle at 30% 30%, rgba(170, 243, 255, 0.5) 0%, transparent 60%)",
  "radial-gradient(circle at 70% 70%, rgba(136, 236, 253, 0.5) 0%, transparent 60%)",
  "radial-gradient(circle at 30% 30%, rgba(115, 234, 254, 0.5) 0%, transparent 60%)",
  "radial-gradient(circle at 60% 60%, rgba(85, 229, 254, 0.5) 0%, transparent 60%)",
];

  const linearGradients = [
    "linear-gradient(to bottom right, green, yellow)",
    "linear-gradient(to bottom right, pink, indigo)",
    "linear-gradient(to bottom right, orange, green)",
  ];
const [patternBackground, setPatternBackground] = useState(
  randomPatternBackgrounds[0]
);

useEffect(() => {
  setPatternBackground(randomPatternBackgrounds[activeCard % randomPatternBackgrounds.length]);
}, [activeCard]);

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div className="">
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="max-h-screen overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      {/* Blurry Background Overlay */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: patternBackground,
        filter: "blur(50px)", // Blurry effect
        opacity: 0.7, // Slight transparency
      }}
    />
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-gray-800"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-gray-600 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-lg bg-white sticky top-10 overflow-hidden  border-4 border-grey-200",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
    </div>
  );
};
