import React, { useRef } from "react";
import Paragraph from "./modules/Paragraph";
import Textslider from "./modules/Textslider";
import { useGSAP } from '@gsap/react';


import gsap, { Linear } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Container } from "postcss";

function Bgslider2() {

  let containerRef = useRef(null)
  let sectionRefs = useRef(null)

 let card = [
    {
      title:"Waiting for Aziza (single)",
      desc:"Jazz. April, 2020  ",
      image:"https://music-bandlink.s3.yandex.net/img/bandlinks/1Vi5I_8rWOpBrA_370x370.jpeg"
    },
    {
      title:"Surrogate  dreams ||",
      desc:"Classical. April, 2020  ",
      image:"https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/bc/26/b7/bc26b7d9-0702-2dce-3464-c0ef4a6f8f4e/cover.jpg/500x500bb.jpg"
    },
    {
      title:"Riad Mammadov performs at the puskin museum (TCHAIKOVSKY CHOPIN SCRIABIN)",
      desc:"Authors Music. june, 2021  ",
      image:"https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/52/69/98/52699864-706d-0a60-9c65-cd885a1f5b5a/source/500x500bb.jpg"
    },
    {
      title:"Riad Mammadov performs at the puskin museum (BRAHMS RACHMANINOFF MAMMADOV)",
      desc:"Classical. march 2022   ",
      image:"https://music-bandlink.s3.yandex.net/img/bandlinks/lMwrE_WgpqXxtW_370x370.jpeg"
    },
    {
      title:"I Hope This Night will Never End",
      desc:"Classical. july, 2023  ",
      image:"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/82/30/f3/8230f306-834e-d372-f3f1-0a5bace8f577/contsched.ejjxffku.jpg/500x500bb.jpg"
    },
    {
      title:"EAST  of Eden (Go to East of Eden )",
      desc:"Classical. january, 2025    ",
      image:"https://linkstorage.linkfire.com/medialinks/images/5dd086c4-3fa0-42b7-85e3-db8b5796fbe7/artwork-440x440.jpg"
    },
  ]
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: sectionRefs.current, // 🔥 Fix: Pinning applied to the section
        start: "top top",
        end:"+=200%",  // 🔥 Ensures smooth scroll effect
        scrub: true,
        pin: true,
        // markers: true, // Debugging: Remove for production
      },
      x: "-320%",
      duration: 5,
      // ease: Linear,
    });
  }, );
  return (
    <section ref={sectionRefs} className="flex overflow-x-hidden flex-nowrap ">
    <div ref={containerRef} className="w-full flex  flex-nowrap ">
    <Paragraph title={"Background"} color={'white'} background={"#110C13"} Paragraph={"Riad’s back catalog includes Surrogate dreams II EP, single Waiting for Aziza (both 2020), I Hope This Night Will Never End EP, East of Eden (both 2021), Live at The Pushkin Museum. Part I, To the East of Paradise (both 2022), Live at The Pushkin Museum. Part II (2024)"} />
    
    <div className="w-fit h-screen  justify-center flex-shrink-0 ">
        <Textslider color={"#110C13"} paragraph={"Listen"}/>
    </div>
    <div  className="cards flex items-center px-20 gap-20">
      {
        card.map((item,index)=>{
          return (
            <div key={index} className="card aspect-square h-[25rem] w-[27rem]">
              <img className="w-full h-full  " src={item.image} alt={item.title} />
              <h4 className="text-2xl font-semibold">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          )
        })
      }
    </div>
   
    </div>
    </section>
  );
}

export default Bgslider2;
