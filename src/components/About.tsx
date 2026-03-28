"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { getIcon } from "./IconResolver";
import { siteContent } from "@/data/content";

const { about, brand } = siteContent;

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-mustard text-xs uppercase tracking-[0.4em]">
            {about.label}
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-7xl md:text-8xl text-white mt-4">
            {about.headingMain}{" "}
            <span className="gradient-text">{about.headingAccent}</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            {about.description}
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-dark-card border border-dark-border overflow-hidden group">
              {about.image ? (
                <img src={about.image} alt="About AlphaTime" className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-mustard/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-[family-name:var(--font-bebas-neue)] text-[8rem] sm:text-[12rem] leading-none text-mustard/5">
                      {brand.watermark}
                    </div>
                  </div>
                </>
              )}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-mustard/40" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-mustard/40" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-mustard text-black p-6 shadow-2xl"
            >
              <div className="font-[family-name:var(--font-bebas-neue)] text-4xl leading-none">
                {about.badge.line1}
              </div>
              <div className="font-[family-name:var(--font-bebas-neue)] text-2xl">
                {about.badge.line2}
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            {about.values.map((value, i) => {
              const Icon = getIcon(value.iconName);
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-dark-card border border-dark-border flex items-center justify-center group-hover:border-mustard/50 group-hover:bg-mustard/5 transition-all duration-500">
                    <Icon className="w-6 h-6 text-mustard" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-wider text-white mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-text text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
