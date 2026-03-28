"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { siteContent } from "@/data/content";

const { programs } = siteContent;

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" className="relative py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-mustard text-xs uppercase tracking-[0.4em]">
            {programs.label}
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-7xl md:text-8xl text-white mt-4">
            {programs.headingMain}{" "}
            <span className="gradient-text">{programs.headingAccent}</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            {programs.description}
          </p>
        </AnimatedSection>

        <div ref={ref} className="space-y-4 max-w-6xl mx-auto">
          {programs.items.map((program, i) => (
            <motion.div
              key={program.number}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-dark-card border border-dark-border hover:border-mustard/30 transition-all duration-500 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 p-6 sm:p-8">
                {/* Number */}
                <span className="font-[family-name:var(--font-bebas-neue)] text-5xl text-mustard/20 group-hover:text-mustard/40 transition-colors duration-500 w-16 flex-shrink-0">
                  {program.number}
                </span>

                {/* Title */}
                <div className="flex-grow min-w-0 lg:w-1/4">
                  <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl sm:text-3xl tracking-wider text-white group-hover:text-mustard transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-mustard/60 text-xs uppercase tracking-wider mt-1">
                    {program.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-text text-sm leading-relaxed flex-grow lg:w-1/3">
                  {program.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 lg:w-1/5 flex-shrink-0">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] uppercase tracking-wider border border-dark-border text-gray-text group-hover:border-mustard/20 group-hover:text-mustard/80 transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <motion.div
                  className="flex-shrink-0 hidden lg:block"
                  initial={false}
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight className="w-5 h-5 text-dark-border group-hover:text-mustard transition-colors duration-300" />
                </motion.div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-mustard to-transparent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
