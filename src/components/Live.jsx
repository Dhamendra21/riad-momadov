import React from "react";
import Textslider from "./modules/Textslider";

function Live() {
    let elem = [
        {
            date:"sat february 2, 2025 ",
            title:"HiJaz(z)",
            venue:"KozLov's Jazz club"
        },
        {
            date:"Fri february 6, 2025",
            title:"East of Eden ",
            venue:"St. Petersburg, The new stage of the Alexandrinsky Theater"
        },
        {
            date:"Thu february 7, 2025",
            title:"East of Eden ",
            venue:"Moscow, Zaryadye"
        },
        {
            date:"Sun february 15, 2025",
            title:"East of Eden ",
            venue:"Krasnoyarsk Philharmonic Society"
        },
       
      ]
  return (
    <section className="w-full text-[#110C13] flex flex-col pb-20 items-center ">
      <Textslider paragraph={"Live"} color={"#110C13"} />
     <div className=" 
      w-full md:p-20 p-5 ">
     {
        elem.map((item, index) => (
          <div key={index} className=" hover:bg-[#110C13] text-[#110C13] hover:text-white  mx-a grid grid-cols-4 py-10  sm:px-8 ">
            <h2 className=" capitalize col-span-4 md:col-span-1  text-3xl">{item.date}</h2>
            <h1 className=" capitalize col-span-4 md:col-span-1  text-2xl">{item.title}</h1>
            <h3 className=" capitalize col-span-4 md:col-span-1  text-xl">{item.venue}</h3>
          </div>
        ))
      }
     </div>
    </section>
  );
}

export default Live;
