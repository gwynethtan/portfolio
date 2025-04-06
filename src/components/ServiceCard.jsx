import React from "react";
import { motion } from "framer-motion";

const ServiceCard=({ title, image, description })=> {
  return (
    <article>
      <motion.div
      initial={{opacity:0, x:-70}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:false}}
      transition={{duration:5}}
      >
        <div className="rounded-2xl border-2 border-neon bg-card flex-col justify-items-center p-4 space-y-5">
          <h2 className="block font-semibold text-lg text-white">{title}</h2>
          <img src={image} alt="Service Icon" className="w-14 h-14"/>
          <p className="block text-secondary text-sm font-medium text-justify break-words">{description}</p>
        </div>
      </motion.div>
    </article>
  );
}

export default ServiceCard