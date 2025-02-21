'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Observer);

const images = [
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
];

export function WhyAreWeHere() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingsRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const outerWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const innerWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  let currentIndex = -1;
  let animating = false;
  const wrapIndex = gsap.utils.wrap(0, images.length);

  useGSAP(() => {
    function splitTextAnimation(element: HTMLElement) {
      if (!element) return;
      const text = element.innerText;
      element.innerHTML = text
        .split("")
        .map((char) => `<span class="char">${char}</span>`)
        .join("");

      gsap.from(element.querySelectorAll(".char"), {
        duration: 5,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    }

    gsap.set(outerWrappersRef.current, { yPercent: 100 });
    gsap.set(innerWrappersRef.current, { yPercent: -100 });

    function gotoSection(index: number, direction: number) {
      if (animating) return;
      index = wrapIndex(index);
      animating = true;
      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;
      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: 'power1.inOut' },
        onComplete: () => { animating = false; },
      });

      if (currentIndex >= 0) {
        gsap.set(sectionsRef.current[currentIndex], { zIndex: 0 });
        tl.to(imagesRef.current[currentIndex], { yPercent: -15 * dFactor })
          .set(sectionsRef.current[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sectionsRef.current[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappersRef.current[index], innerWrappersRef.current[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      );
      tl.fromTo(imagesRef.current[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);
      tl.call(() => {
        const heading = headingsRef.current[index];
        if (heading) {
          splitTextAnimation(heading);
        }
      }, [], 0.2);

      currentIndex = index;
    }

    Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: -1,
      onDown: () => gotoSection(currentIndex - 1, -1),
      onUp: () => gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);
  });

  return (
    <div>
      <header className="fixed flex items-center justify-between px-5 w-full z-30 h-28 font-bebas text-xl tracking-widest text-black">
        <div>Scroll Open Hackathon</div>
        <div>
          <a href="https://thesynthos.notion.site/SynthOS-Automate-Your-Gains-19618bd263f08027993cfa6c5618941d" target="_blank" rel="noopener noreferrer">
            Original By SynthOS
          </a>
        </div>
      </header>
      {[
        '1. PROBLEM: ',
        '2. Solution:',
        '3. Problem: ',
        '4. Solution:'
      ].map((text, i) => (
        <section key={i} ref={(el) => { sectionsRef.current[i] = el as HTMLDivElement; }} className="fixed inset-0 h-screen w-screen bg-cover bg-center section">
          <div ref={(el) => { outerWrappersRef.current[i] = el as HTMLDivElement; }} className="w-full h-full overflow-hidden">
            <div ref={(el) => { innerWrappersRef.current[i] = el as HTMLDivElement; }} className="w-full h-full overflow-hidden">
              <div ref={(el) => { imagesRef.current[i] = el as HTMLDivElement; }} className="flex items-center justify-center h-full w-full">
                <Image src={images[i]} alt={`Background ${i + 1}`} layout="fill" objectFit="cover" priority />
                <h2 ref={(el) => { headingsRef.current[i] = el; }} className="text-center text-black text-5xl uppercase w-4/5 max-w-4xl">
                  {text}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}