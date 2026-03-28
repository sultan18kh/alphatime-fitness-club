// ============================================================================
// AlphaTime Fitness Club — Content Type Definitions
// ============================================================================

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
}

export interface BrandInfo {
  name: string;
  subtitle: string;
  tagline: string;
  motto: string;
  logo: string | null; // path to logo image, null = use icon fallback
  watermark: string; // short text used as watermark in placeholders
}

export interface SocialLink {
  platform: "instagram" | "facebook" | "tiktok" | "google_maps";
  label: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface NavContent {
  links: NavLink[];
  cta: { label: string; href: string };
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroContent {
  tagline: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  stats: HeroStat[];
  backgroundImage: string | null;
}

export interface AboutValue {
  iconName: string; // lucide icon name
  title: string;
  description: string;
}

export interface AboutContent {
  label: string;
  headingMain: string;
  headingAccent: string;
  description: string;
  image: string | null;
  badge: { line1: string; line2: string };
  values: AboutValue[];
}

export interface FacilityItem {
  iconName: string;
  title: string;
  description: string;
  image: string | null;
}

export interface FacilitiesContent {
  label: string;
  headingMain: string;
  headingAccent: string;
  description: string;
  items: FacilityItem[];
}

export interface ProgramItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string | null;
}

export interface ProgramsContent {
  label: string;
  headingMain: string;
  headingAccent: string;
  description: string;
  items: ProgramItem[];
}

export interface TrainerItem {
  name: string;
  role: string;
  specialties: string[];
  experience: string;
  image: string | null;
  socialHref: string | null;
}

export interface TrainersContent {
  label: string;
  headingMain: string;
  headingAccent: string;
  description: string;
  members: TrainerItem[];
}

export interface PricingPlan {
  name: string;
  price: string;
  currency: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaLabel: string;
  ctaHref: string;
}

export interface PricingContent {
  label: string;
  headingMain: string;
  headingAccent: string;
  description: string;
  note: string;
  popularBadge: string;
  plans: PricingPlan[];
}

export interface GalleryItem {
  title: string;
  subtitle: string;
  span: string; // tailwind grid span classes
  image: string | null;
}

export interface GalleryContent {
  label: string;
  headingMain: string;
  headingAccent: string;
  description: string;
  items: GalleryItem[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string | null;
}

export interface TestimonialsContent {
  label: string;
  headingMain: string;
  headingAccent: string;
  description: string;
  reviews: TestimonialItem[];
}

export interface ContactInfoBlock {
  iconName: string;
  title: string;
  details: string[];
}

export interface ContactFormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  colSpan?: number; // 1 or 2 (full width)
}

export interface ContactContent {
  label: string;
  headingMain: string;
  headingAccent: string;
  description: string;
  info: ContactInfoBlock[];
  mapEmbedUrl: string;
  formFields: ContactFormField[];
  interests: string[];
  submitLabel: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { name: string; href: string }[];
}

export interface FooterContent {
  ctaHeadingLine1: string;
  ctaHeadingLine2: string;
  ctaLabel: string;
  ctaHref: string;
  description: string;
  linkGroups: FooterLinkGroup[];
  copyright: string;
}

export interface SiteContent {
  meta: SiteMetadata;
  brand: BrandInfo;
  social: SocialLink[];
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  facilities: FacilitiesContent;
  programs: ProgramsContent;
  trainers: TrainersContent;
  pricing: PricingContent;
  gallery: GalleryContent;
  testimonials: TestimonialsContent;
  contact: ContactContent;
  footer: FooterContent;
}
