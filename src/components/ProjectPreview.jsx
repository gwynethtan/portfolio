import React from "react";
import { motion } from "framer-motion";
import RollingGallery from './RollingGallery';
import NavLinkButton from './NavLinkButton'; 

const ProjectPreview=()=>{
    return(
        <section className="h-screen flex items-center">
            <motion.div
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:false}}
            transition={{duration:1}}
            className=" w-screen"
            >
                <div className="flex flex-col items-center">
                    <h2 className="text-neon font-semibold text-4xl sm:text-5xl">Projects</h2>
                    <RollingGallery autoplay={true} pauseOnHover={true} />
                    <NavLinkButton text="View Projects" link="Projects"/>
                </div>
            </motion.div>
        </section>
    );
}

export default ProjectPreview;