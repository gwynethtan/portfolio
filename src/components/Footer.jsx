import React from "react";
import Github from "../assets/github.png"
import Email from "../assets/email.png"
import Linkedln from "../assets/linkedln.png"
import Threads from "./Threads";

const Footer=()=> {
  return (
    <footer className="">
        <div style={{ width: '100%', height: '300px', position: 'relative' }}>
            <Threads
            amplitude={1}
            distance={0.01}
            enableMouseInteraction={true}
            />
        </div>
        <div className="flex space-x-7 justify-center lg:px-96">
            <a href="https://github.com/gwynethtan" >
                <img src={Github} alt="Github" className="h-12 w-12" />
            </a>
            <a href="mailto:gwynethtann@gmail.com">
                <img src={Email} alt="Email" className="h-12 w-12" />
            </a>
            <a href="https://www.linkedin.com/in/gwyneth-tan-9b0626259/">
                <img src={Linkedln} alt="LinkedIn" className="h-12 w-12" />
            </a>
        </div>
        <p className="text-neon font-medium text-lg text-center pt-6 pb-8">Made with <span className="inline-block animate-bounce text-xl">🩷</span> by Gwyneth Tan</p>
    </footer>
  );
}

export default Footer