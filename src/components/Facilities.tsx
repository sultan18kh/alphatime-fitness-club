"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Dumbbell,
  Zap,
  Waves,
  Shield,
  Users,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const facilities = [
  {
    icon: Dumbbell,
    title: "FREE WEIGHTS",
    description:
      "Extensive collection of dumbbells, barbells, and Olympic plates for serious lifters.",
    accent: "from-mustard/20 to-transparent",
  },
  {
    icon: Zap,
    title: "POWER RACKS",
    description:
      "Multiple squat racks, deadlift platforms, and bench stations for heavy compound work.",
    accent: "from-mustard/15 to-transparent",
  },
  {
    icon: Waves,
    title: "CABLE MACHINES",
    description:
      "Full cable crossover stations and smith machines for isolation and accessory work.",
    accent: "from-mustard/20 to-transparent",
  },
  {
    icon: Users,
    title: "LADIES SECTION",
    description:
      "Dedicated, private training area for women with full equipment access.",
    accent: "from-mustard/15 to-transparent",
  },
  {
    icon: Sparkles,
    title: "CLEAN FACILITY",
    description:
      "Impeccably maintained equipment and spaces. Clean, hygienic, and inviting.",
    accent: "from-mustard/20 to-transparent",
  },
  {
    icon: Shield,
    title: "MODERN EQUIPMENT",
    description:
      "State-of-the-art machines paired with old-school free weight essentials.",
    accent: "from-mustard/15 to-transparent",
  },
];

export default function Facilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="facilities" className="relative py-20 sm:py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-mustard text-xs uppercase tracking-[0.4em]">
            What We Offer
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-7xl md:text-8xl text-white mt-4">
            IRON <span className="gradient-text">PARADISE</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Everything you need to build serious muscle. Nothing you don&apos;t.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, i) => (
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
                className={`absolute inset-0 bg-gradient-to-br ${facility.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-mustard/10 flex items-center justify-center mb-6 group-hover:bg-mustard/20 transition-colors duration-500">
                  <facility.icon className="w-6 h-6 text-mustard" />
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
