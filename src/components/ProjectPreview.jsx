import React from "react";
import { motion } from "framer-motion";
import NavLinkButton from './NavLinkButton'; 
import ProjectPreviewPic from '../assets/projectPreview.png'

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
                <div className="flex flex-col lg:flex-row items-center">
                    <div>
                        <h2 className="text-neon font-semibold text-4xl sm:text-5xl">Projects</h2>
                        <NavLinkButton text="View Projects" link="Projects"/>
                    </div>
                    <img src={ProjectPreviewPic} className="mr-3" />
                    </div>
            </motion.div>
        </section>
    );
}

export default ProjectPreview;