
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface HeroMedia {
  url: string;
  type: 'image' | 'video';
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  media: HeroMedia[]; // Changed from backgroundImage: string
}

const HeroSection = ({ title, subtitle, media }: HeroSectionProps) => {
  const [index, setIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % media.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, [media.length]);

  useEffect(() => {
    setTypedTitle("");
    let currentIndex = 0;
    const typing = window.setInterval(() => {
      currentIndex += 1;
      setTypedTitle(title.slice(0, currentIndex));
      if (currentIndex >= title.length) {
        window.clearInterval(typing);
      }
    }, 60);

    return () => window.clearInterval(typing);
  }, [title]);

  useEffect(() => {
    const blinkCursor = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => window.clearInterval(blinkCursor);
  }, []);

  const currentMedia = media[index];

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // The "Sharp" fade
        >
          {currentMedia.type === 'video' ? (
            <video
              src={currentMedia.url}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          ) : (
            <motion.img
              src={currentMedia.url}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }} // The "Gradual Zoom"
              transition={{ duration: 7, ease: "linear" }}
            />
          )}
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-black/50 z-10" /> 
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-20 text-left">
        <div className="max-w-5xl"> {/*Reduce or increase 5xl to give title text line text space */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.1]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {typedTitle}
            <span className="inline-block w-[1ch] text-white">
              {showCursor ? "|" : " "}
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-2xl text-white/90 mb-10 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {subtitle}
          </motion.p>

          {/* Dual Button Layout */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {/* Button 1: Bordered/Outlined */}
            <Link
              to="/about"
              className="inline-flex items-center px-5 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-black transition-all"
            >
              Explore Our Research
            </Link>

            {/* Button 2: Colored (Red) */}
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-3 sm:px-8 sm:py-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-all transform hover:scale-105"
            >
              <span>Contact Us</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
