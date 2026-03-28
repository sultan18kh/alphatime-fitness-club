"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { getIcon } from "./IconResolver";
import { siteContent } from "@/data/content";

const { facilities, brand } = siteContent;

const accentCycle = [
  "from-mustard/20 to-transparent",
  "from-mustard/15 to-transparent",
];

export default function Facilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="facilities" className="relative py-20 sm:py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-mustard text-xs uppercase tracking-[0.4em]">
            {facilities.label}
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-7xl md:text-8xl text-white mt-4">
            {facilities.headingMain}{" "}
            <span className="gradient-text">{facilities.headingAccent}</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            {facilities.description}
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.items.map((facility, i) => {
            const Icon = getIcon(facility.iconName);
            const accent = accentCycle[i % accentCycle.length];
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group bg-dark-card border border-dark-border p-8 overflow-hidden hover:border-mustard/30 transition-all duration-500"
              >
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 text-center flex flex-col items-center">
                  {facility.image ? (
                    <img src={facility.image} alt={facility.title} className="w-12 h-12 mb-6 object-contain" />
                  ) : (
                    <div className="w-12 h-12 bg-mustard/10 flex items-center justify-center mb-6 group-hover:bg-mustard/20 transition-colors duration-500">
                      <Icon className="w-6 h-6 text-mustard" />
                    </div>
                  )}
                  <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wider text-white mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-mustard group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
