import React from "react";
import{
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin
} from "react-icons/ai"
import ProfilePicture from "../assets/profilePic.png"
import { motion } from "framer-motion";
import Particles from './Particles';
import NavLinkButton from './NavLinkButton'; 

const Hero=()=> {
  return (
    <section>
        <div className="w-screen h-screen relative ">
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
            <div className="relative h-screen w-screen flex overflow-hidden">
                <div className=" flex-col lg:flex-row flex items-center justify-center lg:justify-between px-2 md:px-12 lg:px-24 relative">
                    <motion.div
                    initial={{opacity:0, x:-50}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{once:false}}
                    transition={{duration:1}}
                    className="z-20"
                    >
                        <div className="text-center lg:text-left pt-32 md:pt-36 lg:pt-0 space-y-3 lg:space-y-8">
                            <h1 className="filter drop-shadow-[0_0_80px_rgba(0,255,255,1)] text-neon font-semibold tracking-wide text-3xl md:text-[3rem] lg:text-[4rem]">
                            Hello, 
                            <span className="inline lg:block lg:pt-10 text-nowrap">I am Gwyneth</span>
                            </h1>
                            <h2 className="text-white font-semibold text-base sm:pt-2 md:text-lg lg:text-xl">Design . Program . Create</h2>
                            <p className="text-secondary font-semibold lg:text-justify break-words text-sm md:text-base lg:text-lg lg:w-[48vw] pb-6 lg:pb-10">
                            I aim to merge my expertise in design and programming to create innovative, user-centered solutions that bridge technology and creativity.
                            </p>
                            <NavLinkButton text="Learn more" link="Experiences"/>
                        </div>
                    </motion.div>
                    
                    <motion.div
                    initial={{opacity:0, x:50}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{once:false}}
                    transition={{duration:1}}
                    className="z-20 flex justify-center items-end h-full"
                    >
                    <div className="pt-5 pr-12 filter drop-shadow-[0_0_100px_rgba(0,255,255,.5)] flex justify-center z-20 w-[84vw] h-[56vh] md:w-[70vw] md:h-[60vh] lg:w-[46vw] lg:h-[80vh]">
                        <img src={ProfilePicture}/>
                    </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>


  );
}

export default Hero

