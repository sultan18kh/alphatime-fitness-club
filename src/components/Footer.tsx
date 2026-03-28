"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dumbbell, MapPin } from "lucide-react";
import { siteContent } from "@/data/content";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "./SocialIcons";

const footerLinks = [
  {
    title: "GYM",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Facilities", href: "#facilities" },
      { name: "Gallery", href: "#gallery" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "TRAINING",
    links: [
      { name: "Programs", href: "#programs" },
      { name: "Trainers", href: "#trainers" },
      { name: "Pricing", href: "#pricing" },
      { name: "Personal Training", href: "#contact" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { name: "Instagram", href: "https://www.instagram.com/alphatimefitnessclub/" },
      { name: "Facebook", href: "https://www.facebook.com/AlphaTimeFitnessclub/" },
      { name: "TikTok", href: "https://www.tiktok.com/@alphatimefitnessclub" },
      { name: "Google Maps", href: "https://share.google/lVrFAL37AdFCGKQVt" },
    ],
  },
];

const socials = [
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/alphatimefitnessclub/",
    label: "Instagram",
  },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/AlphaTimeFitnessclub/",
    label: "Facebook",
  },
  {
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@alphatimefitnessclub",
    label: "TikTok",
  },
  {
    icon: MapPin,
    href: "https://share.google/lVrFAL37AdFCGKQVt",
    label: "Google Maps",
  },
];

const { brand } = siteContent;

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-dark-border">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-6xl md:text-7xl text-white mb-4">
              YOUR TRANSFORMATION
            </h2>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-6xl md:text-7xl gradient-text mb-8">
              STARTS TODAY
            </h2>
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(212,160,23,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-4 bg-mustard text-black font-bold text-sm uppercase tracking-[0.2em] hover:bg-mustard-light transition-colors duration-300"
            >
              Join AlphaTime
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-mustard to-transparent opacity-30" />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={`${brand.name} ${brand.subtitle} logo`}
                  width={40}
                  height={40}
                  sizes="40px"
                  className="h-10 w-10 object-contain"
                />
              ) : (
                <Dumbbell className="w-7 h-7 text-mustard" />
              )}
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wider text-white leading-none">
                  {brand.name}
                </span>
                <span className="text-[10px] tracking-[0.3em] text-mustard/80 uppercase">
                  {brand.subtitle}
                </span>
              </div>
            </a>
            <p className="text-gray-text text-sm leading-relaxed mb-6 max-w-sm">
              Lahore&apos;s home for real muscle building. A modern gym with
              old-school values — for ladies &amp; gents who show up to grind.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 border border-dark-border flex items-center justify-center hover:border-mustard/50 hover:bg-mustard/5 transition-all duration-300 text-gray-text hover:text-mustard"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-wider text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-gray-text text-sm hover:text-mustard transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-text text-xs">
            &copy; {new Date().getFullYear()} AlphaTime Fitness Club. All rights
            reserved.
          </p>
          <p className="text-gray-text/40 text-xs italic">
            No shortcuts. No excuses. Just iron.
          </p>
        </div>
      </div>
    </footer>
  );
}
