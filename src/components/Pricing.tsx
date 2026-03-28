"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { siteContent } from "@/data/content";

const { pricing } = siteContent;

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-mustard text-xs uppercase tracking-[0.4em]">
            {pricing.label}
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-7xl md:text-8xl text-white mt-4">
            {pricing.headingMain}{" "}
            <span className="gradient-text">{pricing.headingAccent}</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            {pricing.description}
          </p>
          <p className="text-mustard/60 text-sm mt-3">
            {pricing.note}
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricing.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative group p-8 border transition-all duration-500 ${
                plan.popular
                  ? "bg-mustard/5 border-mustard/40 glow-border"
                  : "bg-dark-card border-dark-border hover:border-mustard/20"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-mustard text-black text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {pricing.popularBadge}
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wider text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-text text-xs mt-1">{plan.description}</p>
              </div>

              <div className="mb-8 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xs text-mustard/60">{plan.currency}</span>
                  <span className="font-[family-name:var(--font-bebas-neue)] text-5xl text-white">
                    {plan.price}
                  </span>
                </div>
                <span className="text-xs text-gray-text">{plan.period}</span>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-mustard flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-text">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href={plan.ctaHref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`block w-full py-3 text-center text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  plan.popular
                    ? "bg-mustard text-black hover:bg-mustard-light"
                    : "border border-white/20 text-white hover:border-mustard hover:text-mustard"
                }`}
              >
                {plan.ctaLabel}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
