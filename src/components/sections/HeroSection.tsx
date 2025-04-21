
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage
}: HeroSectionProps) => {
  return (
    <div 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 z-0"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors"
          >
            <span>Contact Us</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
