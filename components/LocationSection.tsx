"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { SectionHeader } from "./FeaturesSection";

const WA = "https://wa.me/919310256281";

export default function LocationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const address = "Sector 12, Dwarka, New Delhi – 110075";
  const mapsUrl = "https://maps.google.com/maps?q=Sector+12+Dwarka+New+Delhi+110075";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Sector+12+Dwarka+New+Delhi+110075";

  return (
    <section id="location" className="py-24 bg-[#0f0f0f]">
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/8 to-transparent mb-24" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8" ref={ref}>
        <SectionHeader
          label="Location"
          title="VISIT US AT"
          highlight="DWARKA'S PREMIUM GYM"
          inView={inView}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center shrink-0">
                <MapPin className="text-[#22c55e]" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-base mb-2">Address</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{address}</p>
                <div className="flex gap-3 mt-3">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22c55e] text-xs font-semibold hover:underline"
                  >
                    View on Map
                  </a>
                  <span className="text-gray-600">•</span>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22c55e] text-xs font-semibold hover:underline flex items-center gap-1"
                  >
                    <Navigation size={12} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center shrink-0">
                <Phone className="text-[#f97316]" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-base mb-2">Call Us</h3>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-[#f97316] transition-colors"
                >
                  +91 93102 56281
                </a>
                <p className="text-gray-600 text-xs mt-2">Available on WhatsApp & Phone</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center shrink-0">
                <Clock className="text-[#38bdf8]" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-base mb-2">Hours</h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <p>
                    <span className="text-gray-500">Monday – Friday:</span> 6:00 AM – 10:00 PM
                  </p>
                  <p>
                    <span className="text-gray-500">Saturday – Sunday:</span> 7:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#22c55e] text-black font-bold hover:bg-[#16a34a] transition-all duration-200 glow-green"
              >
                <Navigation size={16} />
                Get Directions
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white font-semibold hover:border-[#22c55e]/50 hover:text-[#22c55e] hover:bg-[#22c55e]/5 transition-all duration-200"
              >
                Chat Now
              </a>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[400px] border border-white/7 bg-[#161616]"
          >
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8279468937844!2d77.04124!3d28.5844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6fccf111111%3A0x1234567890abcdef!2sSector%2012%2C%20Dwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />

            {/* Overlay gradient for aesthetic */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-linear-to-b from-[#0f0f0f] to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <div className="rounded-xl border border-white/7 bg-[#161616] p-6 text-center">
            <p className="text-gray-500 text-sm mb-2">NEARBY</p>
            <p className="text-white font-bold">5 min • RK Puram Metro Station</p>
          </div>
          <div className="rounded-xl border border-white/7 bg-[#161616] p-6 text-center">
            <p className="text-gray-500 text-sm mb-2">FREE PARKING</p>
            <p className="text-white font-bold">Available for all members</p>
          </div>
          <div className="rounded-xl border border-white/7 bg-[#161616] p-6 text-center">
            <p className="text-gray-500 text-sm mb-2">EASILY ACCESSIBLE</p>
            <p className="text-white font-bold">Public transport friendly</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
