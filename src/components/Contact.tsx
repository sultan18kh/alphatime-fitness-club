"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { getIcon } from "./IconResolver";
import { WhatsAppIcon, InstagramIcon } from "./SocialIcons";
import { siteContent } from "@/data/content";
import type { ComponentType } from "react";

const customIconMap: Record<string, ComponentType<{ className?: string }>> = {
  MessageCircle: WhatsAppIcon,
  Instagram: InstagramIcon,
};

const { contact } = siteContent;

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, interests: selectedInterests }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage("Message sent! We'll get back to you soon.");
      setFormState({ name: "", email: "", phone: "", message: "" });
      setSelectedInterests([]);
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <span className="text-mustard text-xs uppercase tracking-[0.4em]">
            {contact.label}
          </span>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-7xl md:text-8xl text-white mt-4">
            {contact.headingMain}{" "}
            <span className="gradient-text">{contact.headingAccent}</span>
          </h2>
          <p className="text-gray-text text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            {contact.description}
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info + Map */}
          <div>
            <div className="space-y-6 mb-10">
              {contact.info.map((info, i) => {
                const Icon = customIconMap[info.iconName] ?? getIcon(info.iconName);
                const content = (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`flex gap-4 group ${info.href ? "cursor-pointer" : ""}`}
                  >
                    <div className="flex-shrink-0 w-11 h-11 bg-dark-card border border-dark-border flex items-center justify-center group-hover:border-mustard/50 group-hover:bg-mustard/5 transition-all duration-300">
                      <Icon className="w-5 h-5 text-mustard" />
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-bebas-neue)] text-base tracking-wider text-white mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail) => (
                        <p
                          key={detail}
                          className={`text-gray-text text-sm leading-relaxed ${info.href ? "group-hover:text-mustard transition-colors duration-300" : ""}`}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );

                if (info.href) {
                  return (
                    <a
                      key={info.title}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  );
                }
                return content;
              })}
            </div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative aspect-video bg-dark-card border border-dark-border overflow-hidden"
            >
              <iframe
                src={contact.mapEmbedUrl}
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
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-text mb-2">
                  Full Name <span className="text-mustard">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full bg-dark-card border px-5 py-4 text-white text-sm placeholder-gray-text/40 focus:border-mustard/50 focus:outline-none transition-colors duration-300 ${errors.name ? "border-red-500/60" : "border-dark-border"}`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-text mb-2">
                    Email <span className="text-mustard">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full bg-dark-card border px-5 py-4 text-white text-sm placeholder-gray-text/40 focus:border-mustard/50 focus:outline-none transition-colors duration-300 ${errors.email ? "border-red-500/60" : "border-dark-border"}`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
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
                  Message <span className="text-mustard">*</span>
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your fitness goals..."
                  className={`w-full bg-dark-card border px-5 py-4 text-white text-sm placeholder-gray-text/40 focus:border-mustard/50 focus:outline-none transition-colors duration-300 resize-none ${errors.message ? "border-red-500/60" : "border-dark-border"}`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-text mb-3">
                  Interested In
                </label>
                <div className="flex flex-wrap gap-2">
                  {contact.interests.map((option) => {
                    const isSelected = selectedInterests.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleInterest(option)}
                        className={`px-4 py-2 border text-xs uppercase tracking-wider transition-all duration-300 ${
                          isSelected
                            ? "border-mustard bg-mustard/10 text-mustard"
                            : "border-dark-border text-gray-text hover:border-mustard/50 hover:text-mustard hover:bg-mustard/5"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status message */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  {statusMessage}
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {statusMessage}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={status !== "loading" ? {
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(212,160,23,0.2)",
                } : {}}
                whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                className="w-full py-4 bg-mustard text-black font-bold text-sm uppercase tracking-[0.2em] hover:bg-mustard-light transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {contact.submitLabel}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
