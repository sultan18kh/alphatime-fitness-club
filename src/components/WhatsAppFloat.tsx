"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "./SocialIcons";
import { siteContent } from "@/data/content";

const whatsapp = siteContent.social.find((s) => s.platform === "whatsapp");

export default function WhatsAppFloat() {
  if (!whatsapp) return null;

  return (
    <motion.a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, duration: 0.4, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-black/30 hover:bg-[#20bd5a] transition-colors duration-300"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </motion.a>
  );
}
