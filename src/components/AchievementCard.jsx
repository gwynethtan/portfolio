import React from "react";
import { motion } from "framer-motion";
import AchievementIcon from "../assets/checklist.png"

const achievementCards=[
  "3.98 GPA, 16 Distinctions (Top 5% of module)",
  "Received leadership awards",
  "2 internships in tech consultancy companies",
  "2x Top in Cohort, 3x Director’s List, 5x Module Prizes",
  "Top Voted Project & Honourable mention for AISG hackathon",
  "Certificate in Advanced Computing Maths and Minor in Social Media Marketing"
]
const AchievementCard=()=> {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-9 md:gap-10 lg:gap-12 px-6 lg:px-28 filter drop-shadow-[0_0_200px_rgba(0,255,255,0.9)]">
      {
        achievementCards.map((achievementCard,index)=>(
          <article key={index} className="rounded-2xl border-2 border-neon bg-card">
            <div className="flex items-center p-2 md:p-4 lg:p-6">
              <img src={AchievementIcon} alt="Service Icon" className="mr-4 w-12 h-12"/>
              <p className=" text-white text-sm md:text-medium lg:text-lg font-medium break-words">{achievementCard}</p>
            </div>
          </article>
        ))
      }
    </section>

  );
}

export default AchievementCard