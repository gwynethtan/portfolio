import React from "react";
import { motion } from "framer-motion";
import AchievementCard from './AchievementCard';  

const Achievements=()=> {
  return (
    <section className="h-screen w-screen flex justify-center items-center pb-32 md:pb-36 lg:pb-40">
        <motion.div
        initial={{opacity:0, x:-70}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:false}}
        transition={{duration:2}}
        >
        <h2 className="text-center text-neon font-semibold text-4xl sm:text-5xl pb-14 md:pb-16 lg:pb-18">Achievements</h2>
        <AchievementCard/>
        </motion.div>
    </section>
  );
}

export default Achievements