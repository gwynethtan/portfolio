import React from "react";
import { motion } from "framer-motion";
import Particles from './Particles';
import IconCloudGlobe from "./IconCloudGlobe";


const Skills=()=> {
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
            <div className="relative min-h-screen w-screen flex items-center">
                <div className="w-screen flex-col lg:flex-row flex items-center justify-center lg:justify-between px-8 lg:px-24 relative">
                    <motion.div
                    initial={{opacity:0, x:-50}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{once:false}}
                    transition={{duration:1}}
                    className="top-32"
                    >
                    <div className="text-center lg:text-left space-y-3 lg:space-y-8 z-20">
                        <h2 className="text-neon font-semibold text-4xl sm:text-5xl">Skills</h2>
                        <p className="text-white font-medium text-sm text-center lg:text-justify break-words md:text-lg lg:text-lg lg:w-[42vw]">
                        I enjoy exploring new technologies to enhance my skills and develop more efficient, modern solutions. The skills shown on the globe represent the skills I've gained through internships, school, or during my free time.
                        </p>
                    </div>
                    </motion.div>
                    
                    <motion.div
                    initial={{opacity:0, x:5}}
                    whileInView={{opacity:1, x:0}}
                    viewport={{once:false}}
                    transition={{duration:1}}
                    className="z-20"
                    >
                        <div className="mt-14 filter drop-shadow-[0_0_18px_rgba(0,255,255,0.3)] md:drop-shadow-[0_0_28px_rgba(0,255,255,0.3)] lg:drop-shadow-[0_0_40px_rgba(0,255,255,0.5)] flex justify-center bottom-5 z-20 w-screen h-[100vw] md:w-[70vw] md:h-[70vw] lg:w-[30vw] lg:h-[30vw]">
                            <IconCloudGlobe/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>


  );
}

export default Skills