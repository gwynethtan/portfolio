import React from "react";
import Cube from "../assets/cube.png"
import Code from "../assets/code.png"
import Sparkle from "../assets/sparkle.png"
import { motion } from "framer-motion";


const serviceCards=[
  {
    title:"Multi Media Development",
    icon: Cube, 
    description:"Proficient in developing innovative solutions for AR/VR/MR and web platforms, leveraging immersive technologies for real-world impact."
  },
  {
    title:"Software Development",
    icon: Code, 
    description:"Skilled in building web-based solutions using APIs, databases, libraries, and frameworks, with a focus on functionality, scalability, and user experience."
  },  
  {
    title:"Design and Marketing",
    icon: Sparkle, 
    description:"Experience in marketing and UI/UX design, with skills in user research, brand alignment, and delivering client-focused solutions."
  },
]    
const Services=()=> {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-16 md:px-36 lg:px-16">
      {
        serviceCards.map((serviceCard,index)=>(
          <article key={index}>
            <motion.div
            initial={{opacity:0, x:-70}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:false}}
            transition={{duration:2}}
            >
              <div className="rounded-2xl border-2 border-neon bg-card flex flex-col items-center justify-center p-4 space-y-8">

                <h2 className="block font-semibold text-lg text-white">{serviceCard.title}</h2>
                <div className="filter drop-shadow-[0_0_24px_rgba(0,255,255,1)]">
                <img src={serviceCard.icon} alt="Service Icon" className="w-14 h-14 "/>
                </div>
                <p className="block text-secondary text-sm font-medium text-justify break-words">{serviceCard.description}</p>
              </div>
            </motion.div>
        </article>
        ))
      }
    </div>
  );
}

export default Services