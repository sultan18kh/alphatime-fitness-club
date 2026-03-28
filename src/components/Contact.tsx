"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const contactInfo = [
  {
    icon: MapPin,
    title: "LOCATION",
    details: [
      "2nd Floor, Cakes and Bakes Building",
      "Ali View Garden, Nadirabad",
      "Lahore 54000, Pakistan",
    ],
  },
  {
    icon: Clock,
    title: "HOURS",
    details: [
      "Mon - Sat: 6:00 AM - 11:00 PM",
      "Ladies Hours: 10AM - 2PM",
    ],
  },
  {
    icon: Phone,
    title: "CONTACT",
    details: [
      "Call for inquiries",
      "DM us on Instagram",
      "@alphatimefitnessclub",
    ],
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-mustard text-xs uppercase tracking-[0.4em]">
            Get In Touch
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-7xl md:text-8xl text-white mt-4">
            JOIN THE <span className="gradient-text">PACK</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Ready to start? Drop us a message or visit the gym. Your transformation
            starts with one step.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info + Map */}
          <div>
            <div className="space-y-8 mb-10">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-dark-card border border-dark-border flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-mustard" />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-wider text-white mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-gray-text text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative aspect-video bg-dark-card border border-dark-border overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0911500821526!2d74.40456929999999!3d31.494178299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919054b14f0c6bb%3A0x527c71b017d1f37c!2sAlphatime%20Fitness%20Club%20(Gym%20for%20Ladies%20%26%20Gents)!5e0!3m2!1sen!2s!4v1774658676110!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AlphaTime Fitness Club Location"
              />
              <div className="absolute inset-0 border border-mustard/10 pointer-events-none" />
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-text mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-dark-card border border-dark-border px-5 py-4 text-white text-sm placeholder-gray-text/40 focus:border-mustard/50 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-text mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-dark-card border border-dark-border px-5 py-4 text-white text-sm placeholder-gray-text/40 focus:border-mustard/50 focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-text mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className="w-full bg-dark-card border border-dark-border px-5 py-4 text-white text-sm placeholder-gray-text/40 focus:border-mustard/50 focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-text mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full bg-dark-card border border-dark-border px-5 py-4 text-white text-sm placeholder-gray-text/40 focus:border-mustard/50 focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-text mb-3">
                  Interested In
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Muscle Building",
                    "Strength Training",
                    "Personal Training",
                    "Ladies Fitness",
                    "Body Transformation",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="px-4 py-2 border border-dark-border text-xs uppercase tracking-wider text-gray-text hover:border-mustard/50 hover:text-mustard hover:bg-mustard/5 transition-all duration-300"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(212,160,23,0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-mustard text-black font-bold text-sm uppercase tracking-[0.2em] hover:bg-mustard-light transition-colors duration-300 flex items-center justify-center gap-3"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
