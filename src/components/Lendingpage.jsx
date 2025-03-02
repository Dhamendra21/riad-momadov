import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from "gsap"
function Lendingpage() {

  let image = useRef(null)
  let image1 = useRef(null)
  let image2 = useRef(null)
  let image3 = useRef(null)

  var tl = gsap.timeline()

  useGSAP(()=>{
    tl.from(image1.current,{
      y:"-100%",
      rotate:10,
      
    })
    tl.from(image2.current,{
      y:"-1000%",
      rotate:10,
      
    })
    tl.from(image3.current,{
      y:"-1000%",
      rotate:10,
      
    })
    tl.from(image.current,{
      y:"-1000%",
      rotate:10,
    })
      
      tl.to(image1.current,{
        opacity:0

      })
      tl.to(image2.current,{
        opacity:0

      })
      tl.to(image3.current,{
        opacity:0

      })
     
  })
  return (
   <header className='pad-x'>
     <div className="container relative min-h-screen flex flex-col items-center justify-center">
     <div className='grid grid-cols-4 items-end sm:w-10/12  p-5 text-[#110C13] '>
        <div className='images  md:col-span-1 md:col-start-3 col-span-4 md:-mb-20'>
         <div className='w-full h-[60vh]  relative mb-22 '>
            <img ref={image1} className='w-full h-full -rotate-[10deg] absolute top-0' src="https://riadmammadov.com/resources/images/gallery/006.jpg" alt="" />  
            <img ref={image2} className='w-full h-full rotate-[3deg] absolute top-0' src="https://riadmammadov.com/resources/images/gallery/005.jpg" alt="" />  
            <img ref={image3} className='w-full h-full rotate-[7deg]  absolute top-0' src="https://riadmammadov.com/resources/images/gallery/004.jpg" alt="" />  
            <img ref={image} className='w-full  h-full  absolute top-0' src="https://riadmammadov.com/resources/images/header/7.jpg" alt="" />  
         </div>
        </div>
        <h1 className='col-span-4  md:text-[15rem] md:order-last md:-mt-[8.5rem] text-[4.2rem] leading-none mt-5'>
          Riad <br /> Mammadov
        </h1>
        <p className='col-span-4 mt-5 text-xl md:col-span-1 md:pl-[2rem] md:-mb-[4rem] leading-none'>
          A concert pianist and composer who combine different styles and genres into music 
        </p>
    </div>
     </div>
   </header>
  )
}

export default Lendingpage