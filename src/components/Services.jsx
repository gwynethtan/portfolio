import React from "react";
import ServiceCard from './ServiceCard';  
import Cube from "../assets/cube.png"
import Code from "../assets/code.png"
import Sparkle from "../assets/sparkle.png"

const Services=()=> {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 px-16">
        <ServiceCard 
        title="Multi Media Development" 
        image={Cube} 
        description="Experienced in building gamification systems and solutions for AR/VR/MR and web platforms, with expertise in both 3D and 2D art pipelines."
        />
        <ServiceCard 
        title="Web Development" 
        image={Code} 
        description="I have experience in using APIs, databases, libraries and frameworks to build websites that creates solutions."
        />
        <ServiceCard 
        title="Design and Marketing" 
        image={Sparkle} 
        description="I am skilled in marketing and UI/UX designing. I am able to do research and follow brand guides to meet client needs."
        />
    </div>
  );
}

export default Services