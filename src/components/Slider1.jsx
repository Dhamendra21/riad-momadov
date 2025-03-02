import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap, { Linear } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Slider1() {
  let imageRefs = useRef([]);
  let containerRef = useRef(null);
  let sectionRef = useRef(null); // NEW: Ref for pinning

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current, // 🔥 Fix: Pinning applied to the section
        start: "top top",
        end: "+=200%", // 🔥 Ensures smooth scroll effect
        scrub: true,
        pin: true,
        // markers: true, // Debugging: Remove for production
      },
      x: "-140%",
      duration: 1,
      ease: Linear,
    });
  }, []);

  return (
    <section ref={sectionRef} className=" h-fit relative overflow-x-hidden">
      <div
        ref={containerRef}
        className="images w-full   px-10 flex gap-10"
      >
        {[
          "https://riadmammadov.com/resources/images/gallery/007.jpg",
          "https://riadmammadov.com/resources/images/gallery/006.jpg",
          "https://riadmammadov.com/resources/images/gallery/005.jpg",
          "https://riadmammadov.com/resources/images/gallery/004.jpg",
          "https://riadmammadov.com/resources/images/gallery/001.jpg",
        ].map((images, index) => {
          return (
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              key={index}
              className="object-cover w-full md:w-1/2 h-[40vh] md:h-[80vh] min-h-full"
              src={images}
              alt=""
            />
          );
        })}
        <h1 className="text-[13rem] md:text-[25rem] text-[#110C13]">Gist</h1>
        {/* <div className="w-full h-[100vh] bg-[#110C13] ">  </div> */}
      </div>
    </section>
  );
}

export default Slider1;
