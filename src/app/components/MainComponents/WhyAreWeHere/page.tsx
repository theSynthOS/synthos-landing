"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function WhyAreWeHere() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-700">Pain Points and Our Approach</h1>
      <InfiniteMovingCards
        items={painPoints}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const painPoints = [
  
  {
    id: 1,
    quote: "Users are tired of juggling multiple dApps, searching for the best yield on their own.",
    name: "Solution",
    title: "SynthOS brings every DeFi opportunity into a single place, saving hours of manual research."
  },
  {
    id: 2,
    quote: "Manual trades often lead to missed timing and subpar returns.",
    name: "Solution",
    title: "SynthOS automates your moves at lightning speed, seizing fleeting yield boosts you'd otherwise miss."
  },
  {
    id: 3,
    quote: "Fear of accidentally signing something malicious.",
    name: "Solution",
    title: "SynthOS runs on a secure foundation so you always see exactly what you're agreeing to, no more blind trust."
  },
  {
    id:4,
    quote: "There are too many AI agents in the space—how do users find them or even remember their names?",
    name: "Solution",
    title: "SynthOS simplifies the search by categorizing AI agents based on their specific actions, making discovery effortless."
  }
];
