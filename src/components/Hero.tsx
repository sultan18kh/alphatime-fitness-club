"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark to-black" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating mustard orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-mustard/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-mustard/10 rounded-full blur-[100px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 border border-mustard/30 text-mustard text-xs sm:text-sm uppercase tracking-[0.4em]">
            Where Strength Meets Discipline
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-[family-name:var(--font-bebas-neue)] text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] text-white"
          >
            BUILT FOR
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-[family-name:var(--font-bebas-neue)] text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-[0.85] gradient-text"
          >
            THE IRON
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-gray-text text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Lahore&apos;s home for real muscle building. Heavy iron, expert trainers,
          zero excuses. For ladies &amp; gents who show up to put in the work.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,160,23,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-mustard text-black font-bold text-sm uppercase tracking-[0.2em] hover:bg-mustard-light transition-colors duration-300"
          >
            Start Your Journey
          </motion.a>
          <motion.a
            href="#programs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] hover:border-mustard hover:text-mustard transition-all duration-300"
          >
            View Programs
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "500+", label: "Active Members" },
            { value: "10+", label: "Expert Trainers" },
            { value: "5000", label: "Sq. Ft. Gym Floor" },
            { value: "4.9", label: "Google Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-bebas-neue)] text-3xl sm:text-4xl text-mustard">
                {stat.value}
              </div>
              <div className="text-xs text-gray-text uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-text">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-mustard" />
        </motion.div>
      </motion.div>
    </section>
  );
}
