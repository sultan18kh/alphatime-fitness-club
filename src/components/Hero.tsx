"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteContent } from "@/data/content";

const { hero, brand } = siteContent;
const heroLogo = "/images/logo_circle.png";

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden px-4 pt-20 pb-8 sm:px-6 sm:pt-28 sm:pb-14">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark to-black" />

      {hero.backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        />
      )}

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

      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-mustard/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-mustard/10 rounded-full blur-[100px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-5"
        >
          <span className="inline-block px-4 py-2 border border-mustard/30 text-mustard text-xs sm:text-sm uppercase tracking-[0.4em]">
            {hero.tagline}
          </span>
        </motion.div>

        {/* Stacked on mobile, side-by-side on md+ */}
        <div className="mb-4 sm:mb-6 flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-10 lg:gap-12">
          {brand.logo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="shrink-0"
            >
              <div
                className="relative overflow-hidden rounded-full border border-mustard/25 bg-black/55 shadow-[0_0_40px_rgba(212,160,23,0.18)] backdrop-blur-md"
                style={{ width: "clamp(6rem, 28vh, 19rem)", height: "clamp(6rem, 28vh, 19rem)" }}
              >
                <div className="absolute inset-[10%] overflow-hidden rounded-full">
                  <Image
                    src={heroLogo}
                    alt={`${brand.name} ${brand.subtitle} logo`}
                    fill
                    priority
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, (max-width: 1280px) 272px, 304px"
                    className="object-contain"
                  />
                </div>
                <div className="pointer-events-none absolute inset-[8%] z-10 rounded-full border border-mustard/12" />
              </div>
            </motion.div>
          )}

          <div className="min-w-0 text-center md:text-left">
            <div className="overflow-hidden mb-1 sm:mb-2">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-[family-name:var(--font-bebas-neue)] leading-[0.85] text-white"
                style={{ fontSize: "clamp(3rem, 13vh, 10rem)" }}
              >
                {hero.headingLine1}
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-[family-name:var(--font-bebas-neue)] leading-[0.85] gradient-text"
                style={{ fontSize: "clamp(3rem, 13vh, 10rem)" }}
              >
                {hero.headingLine2}
              </motion.h1>
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-gray-text text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-5 sm:mb-8 md:mb-10 leading-relaxed"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={hero.ctaPrimary.href}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,160,23,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-mustard text-black font-bold text-sm uppercase tracking-[0.2em] hover:bg-mustard-light transition-colors duration-300"
          >
            {hero.ctaPrimary.label}
          </motion.a>
          <motion.a
            href={hero.ctaSecondary.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.2em] hover:border-mustard hover:text-mustard transition-all duration-300"
          >
            {hero.ctaSecondary.label}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-6 sm:mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14"
        >
          {hero.stats.map((stat) => (
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden sm:flex sm:bottom-6"
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
