import React from "react";
import Textslider from "./modules/Textslider";
import  { useRef } from 'react'
import gsap, { Linear } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
function BgSlider() {
    let imageRefs = useRef(null);
    let container  = useRef(null);
    let sliderRef = useRef(null);
  useGSAP(()=>{
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger:container.current ,
        start: "top 10%",
        end: "top -30%",
        
        scrub: 1,
        // markers: true, 
        pin: true,
      },
    })
    gsap.registerPlugin(ScrollTrigger)
    tl.to(imageRefs.current,{
     duration:2,
      width:"100%",
      left:0,
      ease:Linear,
      duration:5
    })
    tl.to(sliderRef.current,{
      y:100
    })
  })
  return (
    <section ref={container} className="min-h-[130vh] w-full  overflow-x-hidden flex items-center justify-center relative">
      <div
      ref={imageRefs}
        className=" absolute left-[108px] w-[88px] inset-0 bg-cover bg-no-repeat bg-top bg-red-500 "
        style={{
          backgroundImage: `url("https://riadmammadov.com/resources/images/background.jpg")`,
          backgroundPosition: "50% 0%",
        }}
      ></div>
      <div className="container relative w-full flex  items-center flex-nowrap h-[400px] md:h-[70vh]">
       <div ref={sliderRef} className=" translate-y-[50%]" >
       <Textslider color={"#ffff"} paragraph={"Background"}/>
       </div>
      </div>
    </section>
  );
}

export default BgSlider;
