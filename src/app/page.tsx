"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

function Divider() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-mustard to-transparent opacity-30" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Facilities />
        <Divider />
        <Programs />
        <Divider />
        <Trainers />
        <Divider />
        <Pricing />
        <Divider />
        <Gallery />
        <Divider />
        <Testimonials />
        <Divider />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
