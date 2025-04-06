import React from "react";
import{
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin
} from "react-icons/ai"
import ProfilePicture from "../assets/profilePic.png"
import { motion } from "framer-motion";
import Particles from './Particles';

const Hero=()=> {
  return (
    <section>
    <div className="w-full h-screen relative ">
        {/* Particles background */}
        <div className="absolute inset-0 z-10">
        <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
        />
        </div>
        
        {/* Hero content */}
        <div className="relative h-full w-full">
        <div className="h-screen flex sm:justify-between px-8 sm:px-16 relative">
            <motion.div
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:false}}
            transition={{duration:1}}
            className="items-center top-32"
            >
            <div className="blur-2xl bg-purple-blur rounded-full h-40 w-40 sm:h-52 sm:w-52"></div>
            <div className="text-center sm:text-left space-y-3 z-20">
                <h1 className="text-neon font-semibold text-4xl sm:text-4xl">
                Hello, 
                <span className="sm:block text-nowrap">I am Gwyneth</span>
                </h1>
                <h2 className="text-white font-bold text-sm">Design.Program.Create</h2>
                <p className="text-secondary font-semibold text-sm text-center sm:text-justify break-words sm:text-xs sm:w-96">
                I aim to merge my expertise in design and programming to create innovative, user-centered solutions that bridge technology and creativity.
                </p>
            </div>
            <motion.a whileHover={{scale:1.2}} href='#'></motion.a>
            </motion.div>
            
            <motion.div
            initial={{opacity:0, x:8}}
            whileInView={{opacity:1, x:16}}
            viewport={{once:false}}
            transition={{duration:1}}
            className="z-20"
            >
            <div className="absolute bottom-0 z-20 w-[500px] h-[500px] right-3">
                <img src={ProfilePicture} alt="Photo of Gwyneth" className="justify-center"/>
            </div>
            <div className="absolute bottom-0 rounded-full bg-blue-blur blur-2xl w-96 h-96 right-3">
                
            </div>
            </motion.div>
        </div>
        </div>
    </div>
    </section>


  );
}

export default Hero