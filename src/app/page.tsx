import { HowItWorks } from "./components/MainComponents/HowItWorks/page";
// import { WhyAreWeHere } from "./components/MainComponents/WhyAreWeHere/page";
import OneLiner from "./components/MainComponents/OneLiner/page";
// import { ThreeScene } from "./components/threeJS/threeScene";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <div className="min-h-screen">
          <OneLiner />
        </div>

        <div className="min-h-screen">
        <HowItWorks />
        </div>

        
      </div>
      
    </main>
  );
}

// 
// <WhyAreWeHere />