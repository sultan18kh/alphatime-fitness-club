"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const galleryItems = [
  { title: "HEAVY IRON", subtitle: "Free weights area", span: "col-span-2 row-span-2" },
  { title: "SQUAT RACK", subtitle: "Power station", span: "col-span-1 row-span-1" },
  { title: "TRAINING", subtitle: "In session", span: "col-span-1 row-span-1" },
  { title: "CABLES", subtitle: "Isolation work", span: "col-span-1 row-span-2" },
  { title: "THE FLOOR", subtitle: "Main gym area", span: "col-span-2 row-span-1" },
  { title: "LADIES", subtitle: "Dedicated section", span: "col-span-1 row-span-1" },
  { title: "PLATES", subtitle: "Stack 'em up", span: "col-span-1 row-span-1" },
  { title: "DEADLIFT", subtitle: "Platform", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="relative py-20 sm:py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-mustard text-xs uppercase tracking-[0.4em]">
            Inside The Gym
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-7xl md:text-8xl text-white mt-4">
            THE <span className="gradient-text">FLOOR</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Where the real work happens. Dark, gritty, and built for performance.
          </p>
        </AnimatedSection>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] gap-3"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative group bg-dark-card border border-dark-border overflow-hidden cursor-pointer ${item.span} hover:border-mustard/30 transition-all duration-500`}
            >
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-mustard/3 to-transparent" />

              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[family-name:var(--font-bebas-neue)] text-[3rem] sm:text-[5rem] text-mustard/[0.03] group-hover:text-mustard/[0.08] transition-colors duration-700">
                  AT
                </span>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-end p-4 sm:p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h4 className="font-[family-name:var(--font-bebas-neue)] text-xl sm:text-2xl text-white">
                    {item.title}
                  </h4>
                  <p className="text-mustard/60 text-xs uppercase tracking-wider">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-mustard/0 group-hover:border-mustard/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
