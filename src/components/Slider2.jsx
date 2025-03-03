import React, { useRef } from 'react'
import Textslider from './modules/Textslider'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
function Slider2() {
  let section = useRef(null)
  useGSAP(()=>{
    gsap.from(section.current,{
      scrollTrigger: {
        trigger: section.current, // 🔥 Fix: Pinning applied to the section
        start: "top top",
        end:"+=200%",  // 🔥 Ensures smooth scroll effect
        scrub: true,
        pin: true,
        // markers: true, // Debugging: Remove for production
      },
    } )
  },[])
  return (
    <section ref={section} className='min-h-screen text-white w-full flex flex-col justify-center  px-10 bg-[#110C13]'>
       <Textslider color={"#ffff"} paragraph={"Jazz and Mugham"} />
    </section>
  )
}

export default Slider2