import React, { useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap, { Linear } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Textslider({color,paragraph}) {
  
  let containerRef = useRef(null)
  let sectionRefs = useRef([])
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: sectionRefs.current, // 🔥 Fix: Pinning applied to the section
        start: "top top",
         // 🔥 Ensures smooth scroll effect
        scrub: true,
        pin: true,
        // markers: true, // Debugging: Remove for production
      },
      x: "-200%",
      duration: 5,
      ease: Linear,
    });
  },[] );
 // console.log(paragraph);
    
  return (
    <div
    ref={containerRef}
    style={{color:color}}
    className='flex whitespace-nowrap    sm:text-[35rem]  text-[17rem]'>
    {[paragraph]
    .map((t,i)=> <span className="-translate-x-0 px-5" ref={(el)=>(sectionRefs.current[i]= el)} key={i}> {t} </span>)
}
</div>
  )
}

export default Textslider