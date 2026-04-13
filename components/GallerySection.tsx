"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { SectionHeader } from "./FeaturesSection";
import { ChevronDown } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Facilities",
    title: "State-of-the-Art Equipment",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    gradient: "from-[#22c55e]",
  },
  {
    id: 2,
    category: "Training",
    title: "Personal Training Sessions",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
    gradient: "from-[#38bdf8]",
  },
  {
    id: 3,
    category: "Facilities",
    title: "State-of-the-Art Equipment",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    gradient: "from-[#22c55e]",
  },
  {
    id: 4,
    category: "Training",
    title: "Personal Training Sessions",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
    gradient: "from-[#38bdf8]",
  },
  {
    id: 5,
    category: "Facilities",
    title: "State-of-the-Art Equipment",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    gradient: "from-[#22c55e]",
  },
  {
    id: 6,
    category: "Training",
    title: "Personal Training Sessions",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
    gradient: "from-[#38bdf8]",
  },
  {
    id: 7,
    category: "Facilities",
    title: "State-of-the-Art Equipment",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    gradient: "from-[#22c55e]",
  },
  {
    id: 8,
    category: "Training",
    title: "Personal Training Sessions",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
    gradient: "from-[#38bdf8]",
  },
  {
    id: 9,
    category: "Facilities",
    title: "State-of-the-Art Equipment",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    gradient: "from-[#22c55e]",
  },
  {
    id: 10,
    category: "Training",
    title: "Personal Training Sessions",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&q=80",
    gradient: "from-[#38bdf8]",
  },

];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [visibleCount, setVisibleCount] = useState(3);
  const [initialCount, setInitialCount] = useState(3);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
      const newInitialCount = isLarge ? 6 : 3;
      setInitialCount(newInitialCount);
      setVisibleCount(newInitialCount);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + (isLargeScreen ? 3 : 2));
  };

  const handleShowLess = () => {
    setVisibleCount(initialCount);
  };

  const hasMore = visibleCount < GALLERY_ITEMS.length;
  const showLessButton = visibleCount > initialCount;
  const visibleItems = GALLERY_ITEMS.slice(0, visibleCount);

  return (
    <section id="gallery" className="py-24 bg-[#0c0c0c]">
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-24" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref}>
          <SectionHeader
            label="Gallery"
            title="SEE OUR"
            highlight="FACILITIES"
            sub="500+ members train in our state-of-the-art gym with world-class equipment and ambiance."
            inView={inView}
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl overflow-hidden h-56 sm:h-64 md:h-72 cursor-pointer"
            >
              {/* Image */}
              <motion.img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 group-hover:via-black/20 transition-all duration-300`} />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                >
                  <p className={`text-xs font-bold tracking-[0.15em] uppercase mb-2 bg-gradient-to-r ${item.gradient} to-transparent bg-clip-text text-transparent`}>
                    {item.category}
                  </p>
                  <h3 className="text-white text-lg font-bold group-hover:text-[#22c55e] transition-colors duration-200">
                    {item.title}
                  </h3>
                </motion.div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border border-[#22c55e]/0 group-hover:border-[#22c55e]/30 rounded-2xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Buttons */}
        {(hasMore || showLessButton) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12 flex justify-center gap-4 flex-wrap"
          >
            {hasMore && (
              <button
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-[#22c55e]/30 bg-[#22c55e]/8 text-[#22c55e] font-semibold hover:bg-[#22c55e]/15 hover:border-[#22c55e]/60 transition-all duration-200 group"
              >
                Show More
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </motion.div>
              </button>
            )}

            {showLessButton && (
              <button
                onClick={handleShowLess}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-200 group"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ChevronDown size={16} className="group-hover:-translate-y-1 transition-transform rotate-180" />
                </motion.div>
                Show Less
              </button>
            )}
          </motion.div>
        )}

       
      </div>
    </section>
  );
}
