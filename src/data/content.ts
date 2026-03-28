// ============================================================================
// AlphaTime Fitness Club — Centralized Content Configuration
// ============================================================================
// All user-facing text, links, images, and metadata live here.
// Components import from this file — never hardcode content in components.
//
// For images: set `image` to a path like "/images/hero.jpg" or `null`.
// Components render a styled placeholder when image is null.
// ============================================================================

import type { SiteContent } from "./content.types";

export type * from "./content.types";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

export const siteContent: SiteContent = {
  // ---- Meta ----
  meta: {
    title: "AlphaTime Fitness Club | Where Strength Meets Discipline",
    description:
      "Lahore's premier old-school muscle building gym for ladies & gents. Heavy iron, expert trainers, real results. No shortcuts, no excuses — just iron.",
    keywords: [
      "gym",
      "fitness",
      "muscle building",
      "Lahore",
      "bodybuilding",
      "strength training",
      "AlphaTime",
    ],
  },

  // ---- Brand ----
  brand: {
    name: "ALPHATIME",
    subtitle: "Fitness Club",
    tagline: "Where Strength Meets Discipline",
    motto: "No shortcuts. No excuses. Just iron.",
    logo: "/images/logo.png",
    watermark: "AT",
  },

  // ---- Social ----
  social: [
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/alphatimefitnessclub/",
    },
    {
      platform: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/AlphaTimeFitnessclub/",
    },
    {
      platform: "tiktok",
      label: "TikTok",
      href: "https://www.tiktok.com/@alphatimefitnessclub",
    },
    {
      platform: "google_maps",
      label: "Google Maps",
      href: "https://share.google/lVrFAL37AdFCGKQVt",
    },
  ],

  // ---- Navigation ----
  nav: {
    links: [
      { name: "About", href: "#about" },
      { name: "Facilities", href: "#facilities" },
      { name: "Programs", href: "#programs" },
      { name: "Trainers", href: "#trainers" },
      { name: "Pricing", href: "#pricing" },
      { name: "Gallery", href: "#gallery" },
      { name: "Contact", href: "#contact" },
    ],
    cta: { label: "Join Now", href: "#contact" },
  },

  // ---- Hero ----
  hero: {
    tagline: "Where Strength Meets Discipline",
    headingLine1: "BUILT FOR",
    headingLine2: "THE IRON",
    description:
      "Lahore's home for real muscle building. Heavy iron, expert trainers, zero excuses. For ladies & gents who show up to put in the work.",
    ctaPrimary: { label: "Start Your Journey", href: "#contact" },
    ctaSecondary: { label: "View Programs", href: "#programs" },
    stats: [
      { value: "500+", label: "Active Members" },
      { value: "50+", label: "Modern Equipment" },
      { value: "5000", label: "Sq. Ft. Gym Floor" },
      { value: "4.9", label: "Google Rating" },
    ],
    backgroundImage: null,
  },

  // ---- About ----
  about: {
    label: "Our Story",
    headingMain: "MORE THAN A",
    headingAccent: "GYM",
    description:
      "AlphaTime Fitness Club blends the raw energy of old-school iron gyms with modern equipment. We're built for those who believe in the grind — no shortcuts, no excuses.",
    image: "/images/equipment/chest_press.png",
    badge: { line1: "EST.", line2: "LAHORE" },
    values: [
      {
        iconName: "Target",
        title: "DISCIPLINE FIRST",
        description:
          "Consistency beats motivation. We build habits that forge champions.",
      },
      {
        iconName: "Users",
        title: "LADIES & GENTS",
        description:
          "Dedicated sections and programs for everyone who wants to get strong.",
      },
      {
        iconName: "Trophy",
        title: "RESULTS DRIVEN",
        description:
          "No gimmicks. Progressive overload, heavy compounds, real gains.",
      },
      {
        iconName: "Shield",
        title: "OLD SCHOOL VALUES",
        description:
          "The iron doesn't lie. We respect the craft of muscle building.",
      },
    ],
  },

  // ---- Facilities ----
  facilities: {
    label: "What We Offer",
    headingMain: "IRON",
    headingAccent: "PARADISE",
    description:
      "Everything you need to build serious muscle. Nothing you don't.",
    items: [
      {
        iconName: "Dumbbell",
        title: "FREE WEIGHTS",
        description:
          "Extensive collection of dumbbells, barbells, and Olympic plates for serious lifters.",
        image: null,
      },
      {
        iconName: "Zap",
        title: "POWER RACKS",
        description:
          "Multiple squat racks, deadlift platforms, and bench stations for heavy compound work.",
        image: null,
      },
      {
        iconName: "Waves",
        title: "CABLE MACHINES",
        description:
          "Full cable crossover stations and smith machines for isolation and accessory work.",
        image: null,
      },
      {
        iconName: "Users",
        title: "LADIES SECTION",
        description:
          "Dedicated, private training area for women with full equipment access.",
        image: null,
      },
      {
        iconName: "Sparkles",
        title: "CLEAN FACILITY",
        description:
          "Impeccably maintained equipment and spaces. Clean, hygienic, and inviting.",
        image: null,
      },
      {
        iconName: "Shield",
        title: "MODERN EQUIPMENT",
        description:
          "State-of-the-art machines paired with old-school free weight essentials.",
        image: null,
      },
    ],
  },

  // ---- Programs ----
  programs: {
    label: "Training Programs",
    headingMain: "FORGE YOUR",
    headingAccent: "PATH",
    description:
      "Whether you're chasing size, strength, or a complete transformation — we have a program built for you.",
    items: [
      {
        number: "01",
        title: "MUSCLE BUILDING",
        subtitle: "Hypertrophy & Size",
        description:
          "Science-backed hypertrophy programs designed for maximum muscle growth. Progressive overload, volume management, and periodization for serious gains.",
        tags: ["Hypertrophy", "Size", "Volume"],
        image: null,
      },
      {
        number: "02",
        title: "STRENGTH TRAINING",
        subtitle: "Power & Performance",
        description:
          "Powerlifting-style compound movement programs. Squat, bench, deadlift — build raw, functional strength that translates to everything.",
        tags: ["Powerlifting", "Compounds", "Strength"],
        image: null,
      },
      {
        number: "03",
        title: "BODY TRANSFORMATION",
        subtitle: "Complete Overhaul",
        description:
          "Tailored plans for beginners and intermediates looking to completely transform their physique. Nutrition guidance included.",
        tags: ["Fat Loss", "Muscle Gain", "Nutrition"],
        image: null,
      },
      {
        number: "04",
        title: "LADIES FITNESS",
        subtitle: "Strength & Toning",
        description:
          "Dedicated programs for women. Build strength, sculpt muscle, and develop confidence in a supportive environment.",
        tags: ["Women", "Strength", "Toning"],
        image: null,
      },
      {
        number: "05",
        title: "PERSONAL TRAINING",
        subtitle: "1-on-1 Coaching",
        description:
          "One-on-one sessions with expert trainers. Custom programming, form correction, and accountability to fast-track your results.",
        tags: ["Custom", "Coaching", "1-on-1"],
        image: null,
      },
    ],
  },

  // ---- Trainers ----
  trainers: {
    label: "Meet The Team",
    headingMain: "YOUR",
    headingAccent: "COACHES",
    description:
      "Expert trainers invested in your success. Personalized instruction, real accountability, and years of experience.",
    members: [
      {
        name: "COACH MUNEEB",
        role: "Head Trainer & Bodybuilding Specialist",
        specialties: ["Muscle Building", "Contest Prep"],
        experience: "8+ Years",
        image: "/images/trainers/muneeb.png",
        socialHref: "https://www.instagram.com/alphatimefitnessclub/",
      },
      {
        name: "COACH SARA",
        role: "Ladies Fitness & Strength Coach",
        specialties: ["Women's Fitness", "Strength Training"],
        experience: "5+ Years",
        image: null,
        socialHref: null,
      },
      {
        name: "COACH SULTAN",
        role: "Powerlifting & Strength Coach",
        specialties: ["Powerlifting", "Strongman"],
        experience: "7+ Years",
        image: "/images/trainers/sultan.png",
        socialHref: "https://www.instagram.com/sultankh18/",
      },
      {
        name: "COACH FATIMA",
        role: "Transformation & Nutrition Specialist",
        specialties: ["Body Transformation", "Nutrition"],
        experience: "6+ Years",
        image: null,
        socialHref: null,
      },
    ],
  },

  // ---- Pricing ----
  pricing: {
    label: "Membership Plans",
    headingMain: "INVEST IN",
    headingAccent: "YOURSELF",
    description:
      "Every plan gives you access to everything you need. Pick the commitment that matches your goals.",
    note: "All prices in PKR. Contact for personal training add-ons.",
    popularBadge: "Most Popular",
    plans: [
      {
        name: "DAY PASS",
        price: "500",
        currency: "Rs.",
        period: "per day",
        description: "Try the gym, no commitment",
        features: ["Full gym access", "All equipment", "Locker room access"],
        popular: false,
        ctaLabel: "Get Started",
        ctaHref: "#contact",
      },
      {
        name: "MONTHLY",
        price: "5,000",
        currency: "Rs.",
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
        ctaLabel: "Get Started",
        ctaHref: "#contact",
      },
      {
        name: "QUARTERLY",
        price: "12,000",
        currency: "Rs.",
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
        ctaLabel: "Get Started",
        ctaHref: "#contact",
      },
      {
        name: "ANNUAL",
        price: "40,000",
        currency: "Rs.",
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
        ctaLabel: "Get Started",
        ctaHref: "#contact",
      },
    ],
  },

  // ---- Gallery ----
  gallery: {
    label: "Inside The Gym",
    headingMain: "THE",
    headingAccent: "FLOOR",
    description:
      "Where the real work happens. Dark, gritty, and built for performance.",
    items: [
      { title: "HEAVY IRON", subtitle: "Free weights area", span: "col-span-2 row-span-2", image: "/images/equipment/iron.png" },
      { title: "LEGS", subtitle: "Power station", span: "col-span-1 row-span-1", image: "/images/equipment/legs.png" },
      { title: "CHEST", subtitle: "In session", span: "col-span-1 row-span-1", image: "/images/equipment/chest_press.png" },
      { title: "CABLES", subtitle: "Isolation work", span: "col-span-1 row-span-2", image: "/images/equipment/cables.png" },
      { title: "THE FLOOR", subtitle: "Main gym area", span: "col-span-2 row-span-1", image: "/images/equipment/floor.png" },
      { title: "CARDIO", subtitle: "Dedicated section", span: "col-span-1 row-span-1", image: "/images/equipment/cardio.png" },
      { title: "PLATES", subtitle: "Stack 'em up", span: "col-span-1 row-span-1", image: "/images/equipment/plates.png" },
      { title: "DEADLIFT", subtitle: "Platform", span: "col-span-1 row-span-1", image: "/images/equipment/deadlift.png" },
    ],
  },

  // ---- Testimonials ----
  testimonials: {
    label: "Testimonials",
    headingMain: "MEMBER",
    headingAccent: "VOICES",
    description:
      "Don't take our word for it — hear from the people who train here.",
    reviews: [
      {
        name: "Hassan Raza",
        role: "Member for 2 Years",
        text: "AlphaTime completely changed my approach to training. The old-school atmosphere, heavy iron, and no-nonsense coaching pushed me to levels I never thought possible. Gained 15kg of muscle in my first year.",
        rating: 5,
        avatar: null,
      },
      {
        name: "Ayesha Khan",
        role: "Ladies Section Member",
        text: "As a woman, finding a gym where I feel both comfortable and challenged was difficult. AlphaTime's ladies section is incredible — the trainers are supportive, the equipment is top-notch, and the results speak for themselves.",
        rating: 5,
        avatar: null,
      },
      {
        name: "Usman Ali",
        role: "Competitive Powerlifter",
        text: "The best gym in Lahore for serious lifters. Period. The power racks, deadlift platforms, and coaching staff understand what it takes to build real strength. This is home.",
        rating: 5,
        avatar: null,
      },
      {
        name: "Sana Mirza",
        role: "Fitness Enthusiast",
        text: "The cleanliness and professionalism at AlphaTime sets it apart from every other gym I've tried. The trainers genuinely care about your progress and the vibe is incredibly motivating.",
        rating: 5,
        avatar: null,
      },
    ],
  },

  // ---- Contact ----
  contact: {
    label: "Get In Touch",
    headingMain: "JOIN THE",
    headingAccent: "PACK",
    description:
      "Ready to start? Drop us a message or visit the gym. Your transformation starts with one step.",
    info: [
      {
        iconName: "MapPin",
        title: "LOCATION",
        details: [
          "2nd Floor, Cakes and Bakes Building",
          "Ali View Garden, Nadirabad",
          "Lahore 54000, Pakistan",
        ],
      },
      {
        iconName: "Clock",
        title: "HOURS",
        details: [
          "Mon - Sat: 6:00 AM - 11:00 PM",
          "Ladies Hours: 10AM - 2PM",
        ],
      },
      {
        iconName: "Phone",
        title: "CONTACT",
        details: [
          "Call for inquiries",
          "DM us on Instagram",
          "@alphatimefitnessclub",
        ],
      },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0911500821526!2d74.40456929999999!3d31.494178299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919054b14f0c6bb%3A0x527c71b017d1f37c!2sAlphatime%20Fitness%20Club%20(Gym%20for%20Ladies%20%26%20Gents)!5e0!3m2!1sen!2s!4v1774658676110!5m2!1sen!2s",
    formFields: [
      { name: "name", label: "Full Name", type: "text", placeholder: "Your name", colSpan: 2 },
      { name: "email", label: "Email", type: "email", placeholder: "your@email.com", colSpan: 1 },
      { name: "phone", label: "Phone", type: "tel", placeholder: "+92 300 1234567", colSpan: 1 },
      { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your fitness goals...", colSpan: 2 },
    ],
    interests: [
      "Muscle Building",
      "Strength Training",
      "Personal Training",
      "Ladies Fitness",
      "Body Transformation",
    ],
    submitLabel: "Send Message",
  },

  // ---- Footer ----
  footer: {
    ctaHeadingLine1: "YOUR TRANSFORMATION",
    ctaHeadingLine2: "STARTS TODAY",
    ctaLabel: "Join AlphaTime",
    ctaHref: "#contact",
    description:
      "Lahore's home for real muscle building. A modern gym with old-school values — for ladies & gents who show up to grind.",
    linkGroups: [
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
    ],
    copyright: "AlphaTime Fitness Club. All rights reserved.",
  },
};
