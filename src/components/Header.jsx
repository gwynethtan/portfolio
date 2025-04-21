import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import  Wave  from '../assets/wave.png';

const Header=({ title, quotes = [] })=>{

    const sequence = quotes.flatMap(quote => [quote, 1000]);

    return(
        <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }} // this replaces whileInView
        transition={{ duration: 0.5 }}
        className="pt-20 pb-12"
        >
            <div className="justify-center flex lg:justify-between">
                <img src={Wave} className="hidden lg:inline-block lg:h-40 lg:w-[72vh]"/>
                <div className="justify-items-center flex-col">
                    <h1 className="font-bold text-neon text-4xl md:text-[4vh] lg:text-[7vh] pt-12 pb-3 sm:pb-5">{title}</h1>
                    <TypeAnimation
                    sequence={sequence}
                    speed={50}
                    repeat={Infinity}
                    className="font-semibold text-sm sm:text-lg text-white"
                    />
                </div>
                <img src={Wave} className="hidden lg:inline-block lg:h-40 lg:w-[72vh] transform scale-x-[-1]"/>
            </div>
        </motion.div>
    );
}

export default Header;