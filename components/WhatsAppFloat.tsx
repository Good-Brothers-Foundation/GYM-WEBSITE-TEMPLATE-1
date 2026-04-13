"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WA =
  "https://wa.me/919310256281?text=Hi%2C%20I%27m%20interested%20in%20joining%20PowerFit%20Gym!";

export default function WhatsAppFloat() {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="wa-float flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 6 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2.5 bg-[#1a1a1a] border border-white/10 rounded-2xl px-4 py-2.5 shadow-2xl"
          >
            <p className="text-white text-xs font-medium whitespace-nowrap">
              💬 Chat with us — it&apos;s free!
            </p>
            <button
              onClick={() => setTooltip(false)}
              aria-label="Dismiss"
              className="text-gray-600 hover:text-white transition-colors"
            >
              <X size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        id="wa-float-btn"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 14, delay: 1.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center"
        style={{
          boxShadow:
            "0 0 0 0 rgba(37,211,102,0.5), 0 8px 32px rgba(0,0,0,0.45)",
          animation: "wa-pulse 2.4s ease-out infinite",
        }}
      >
        <MessageCircle size={26} className="text-white fill-white relative z-10" />
      </motion.a>

      {/* Pulse keyframes via style tag */}
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0   rgba(37,211,102,0.55), 0 8px 32px rgba(0,0,0,0.45); }
          70%  { box-shadow: 0 0 0 16px rgba(37,211,102,0),   0 8px 32px rgba(0,0,0,0.45); }
          100% { box-shadow: 0 0 0 0   rgba(37,211,102,0),   0 8px 32px rgba(0,0,0,0.45); }
        }
      `}</style>
    </div>
  );
}
