"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { siteContent } from "@/data/content";

const { testimonials } = siteContent;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.reviews.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.reviews.length) % testimonials.reviews.length);

  const review = testimonials.reviews[current];

  return (
    <section id="testimonials" className="relative py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-mustard text-xs uppercase tracking-[0.4em]">
            {testimonials.label}
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-7xl md:text-8xl text-white mt-4">
            {testimonials.headingMain}{" "}
            <span className="gradient-text">{testimonials.headingAccent}</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            {testimonials.description}
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="w-12 h-12 text-mustard/20 mx-auto mb-8" />

              <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed mb-10 font-light">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-mustard" />
                ))}
              </div>

              <h4 className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wider text-white">
                {review.name}
              </h4>
              <p className="text-mustard/60 text-xs uppercase tracking-wider mt-1">
                {review.role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 border border-dark-border hover:border-mustard/50 flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-gray-text" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-mustard"
                      : "w-2 bg-dark-border hover:bg-mustard/30"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 border border-dark-border hover:border-mustard/50 flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5 text-gray-text" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
