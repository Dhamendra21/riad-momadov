import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Paragraph({Paragraph,title,color,background}) {
  let paraRefs = useRef([]);
  let container  = useRef(null);

  let split = Paragraph.split(" ")
  // console.log(split);
  
  

  
  
  

    useGSAP(()=>{
      gsap.registerPlugin(ScrollTrigger)
      gsap.from(paraRefs.current,{
        scrollTrigger: {
          trigger:container.current ,
          start: "top 70%",
          end: "top 20%",
          
          scrub: true,
          // markers: true, 
          // pin: true,
        },
        opacity:0,
        stagger:0.5,
        y:"20%",
      })
    })
    
  return (
    <section className={`w-full min-h-screen flex-shrink-0  px-5 sm:px-[12rem] flex flex-col justify-center  bg-[${background}]`}
    style={{color:color}}
    >
       <h3 className='py-10 sm:text-xl'>{title}</h3>
        <div ref={container} className='para  text-4xl sm:text-7xl  sm:indent-40 leading-1'>
            
           
            {
                Paragraph
                .split("")
                .map((t,i)=> <span className=''  ref={(el) => (paraRefs.current[i] = el)} key={i}>{t}
                
                </span>)
            }
        </div>
    </section>
  )
}

export default Paragraph