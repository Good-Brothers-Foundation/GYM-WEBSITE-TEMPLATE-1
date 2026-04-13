"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MembershipPlans from "@/components/MembershipPlans";
import Testimonials from "@/components/Testimonials";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MembershipPlans />
      <Testimonials />
      <GallerySection />
      <LocationSection />
      <LeadCapture />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
