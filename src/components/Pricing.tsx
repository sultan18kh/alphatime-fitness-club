"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "DAY PASS",
    price: "500",
    period: "per day",
    description: "Try the gym, no commitment",
    features: [
      "Full gym access",
      "All equipment",
      "Locker room access",
    ],
    popular: false,
  },
  {
    name: "MONTHLY",
    price: "5,000",
    period: "per month",
    description: "Most popular choice for regulars",
    features: [
      "Unlimited gym access",
      "All equipment & areas",
      "Basic workout plan",
      "Locker room access",
      "Free fitness assessment",
    ],
    popular: true,
  },
  {
    name: "QUARTERLY",
    price: "12,000",
    period: "per 3 months",
    description: "Commit to real transformation",
    features: [
      "Everything in Monthly",
      "Custom workout plan",
      "Monthly progress tracking",
      "Diet consultation",
      "Priority booking",
    ],
    popular: false,
  },
  {
    name: "ANNUAL",
    price: "40,000",
    period: "per year",
    description: "Best value for the dedicated",
    features: [
      "Everything in Quarterly",
      "2 free PT sessions/month",
      "Nutrition plan included",
      "Guest passes (2/month)",
      "Premium locker",
      "Merchandise discount",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-mustard text-xs uppercase tracking-[0.4em]">
            Membership Plans
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-7xl md:text-8xl text-white mt-4">
            INVEST IN <span className="gradient-text">YOURSELF</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Every plan gives you access to everything you need. Pick the commitment
            that matches your goals.
          </p>
          <p className="text-mustard/60 text-sm mt-3">
            All prices in PKR. Contact for personal training add-ons.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
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
                  Most Popular
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
                  <span className="text-xs text-mustard/60">Rs.</span>
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
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`block w-full py-3 text-center text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  plan.popular
                    ? "bg-mustard text-black hover:bg-mustard-light"
                    : "border border-white/20 text-white hover:border-mustard hover:text-mustard"
                }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
