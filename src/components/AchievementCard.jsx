import React from "react";
import { motion } from "framer-motion";
import AchievementIcon from "../assets/checklist.png"

const achievementCards=[
  "3.99 GPA, 19 Distinctions (Top 5% of module)",
  "Received leadership awards",
  "Completed 3 internships",
  "3x Top in Cohort, 4x Director’s List, 6x Module Prizes",
  "Top Voted Project & Honourable mention for AISG hackathon",
  "Certificate in Advanced Computing Maths and Minor in Social Media Marketing"
]
const AchievementCard=()=> {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-9 md:gap-10 lg:gap-12 px-6 lg:px-28 filter">
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