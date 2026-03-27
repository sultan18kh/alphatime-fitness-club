"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { InstagramIcon } from "./SocialIcons";

const trainers = [
  {
    name: "COACH AHMED",
    role: "Head Trainer & Bodybuilding Specialist",
    specialties: ["Muscle Building", "Contest Prep"],
    experience: "8+ Years",
  },
  {
    name: "COACH SARA",
    role: "Ladies Fitness & Strength Coach",
    specialties: ["Women's Fitness", "Strength Training"],
    experience: "5+ Years",
  },
  {
    name: "COACH BILAL",
    role: "Powerlifting & Strength Coach",
    specialties: ["Powerlifting", "Strongman"],
    experience: "7+ Years",
  },
  {
    name: "COACH FATIMA",
    role: "Transformation & Nutrition Specialist",
    specialties: ["Body Transformation", "Nutrition"],
    experience: "6+ Years",
  },
];

export default function Trainers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trainers" className="relative py-20 sm:py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-mustard text-xs uppercase tracking-[0.4em]">
            Meet The Team
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-7xl md:text-8xl text-white mt-4">
            YOUR <span className="gradient-text">COACHES</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Expert trainers invested in your success. Personalized instruction,
            real accountability, and years of experience.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[3/4] bg-dark-card border border-dark-border overflow-hidden mb-6 group-hover:border-mustard/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                {/* Placeholder initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-bebas-neue)] text-[6rem] text-mustard/5 group-hover:text-mustard/10 transition-colors duration-500">
                    {trainer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                {/* Social overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 z-20 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="w-10 h-10 bg-mustard flex items-center justify-center hover:bg-mustard-light transition-colors cursor-pointer">
                    <InstagramIcon className="w-5 h-5 text-black" />
                  </div>
                </motion.div>

                {/* Experience badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-mustard/90 text-black text-[10px] font-bold uppercase tracking-wider">
                  {trainer.experience}
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wider text-white group-hover:text-mustard transition-colors duration-300">
                  {trainer.name}
                </h3>
                <p className="text-mustard/60 text-xs uppercase tracking-wider mt-1 mb-3">
                  {trainer.role}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {trainer.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 text-[10px] uppercase tracking-wider border border-dark-border text-gray-text"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
