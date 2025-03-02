import React, { useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap, { Linear } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Introwhite() {

  let containerRef = useRef([])
  let sectionRefs = useRef(null)
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: sectionRefs.current, // 🔥 Fix: Pinning applied to the section
        start: "top 30%",
        end: "top -20%", // �� Fix: Pinning applied to the section
         // 🔥 Ensures smooth scroll effect
        scrub: true,
        // pin: true,
        // markers: true, // Debugging: Remove for production
      },
      x:"500",
      opacity:0,
      stagger:1,
      duration: 5,
      ease: Linear,
    });
  },[] );

  return (
    <section ref={sectionRefs} className="w-full min-h-screen text-[#110C13]  overflow-hidden px-5">
      <div
        className="
       w-full min-h-[100vh] md:py-[10rem] md:px-[10rem] flex flex-col justify-center   "
      >
        <div className="md:grid grid-cols-4 items-start">
          <h3
            className="text-xl max-sm:py-20 md:col-span-2  col-span-4
         md:col-start-1  "
          >
            Intro
          </h3>
          <div
            className="md:col-span-2 col-span-4
         md:col-start-3 "
          >
            {[
              "Born and raised in",
              "Baku, Raid received",
              "an European",
              "education at",
              "Moscow Tchaikovsky",
              "Conservatory, so his",
              "Life and work flow ",
              "between two",
              "cultures.",
            ].map((l, i) => {
              return (
                <div ref={(el)=> (containerRef.current[i] = el )} key={i} className="line text-4xl md:text-6xl">
                  <p>{l}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introwhite;
