import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SponsorBannerProps {
  sponsors: string[];
}

const SponsorBanner = ({ sponsors }: SponsorBannerProps) => {
  // Duplicate the sponsors array to create a seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  // State to control animation duration based on screen width
  const [duration, setDuration] = useState(30);
  const [containerWidth, setContainerWidth] = useState(0);

  // Adjust animation duration based on screen width
  useEffect(() => {
    const handleResize = () => {
      // Adjust duration based on screen width - faster on smaller screens
      const width = window.innerWidth;
      setContainerWidth(width);

      // Adjust speed based on screen size
      let newDuration;
      if (width < 640) { // Small mobile
        newDuration = 15;
      } else if (width < 768) { // Mobile
        newDuration = 20;
      } else if (width < 1024) { // Tablet
        newDuration = 25;
      } else { // Desktop
        newDuration = 30;
      }

      setDuration(newDuration);
    };

    handleResize(); // Set initial duration
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-6 overflow-hidden border-y border-gray-100 dark:border-gray-800">
    

      <div className="relative w-full overflow-hidden py-3">
        <motion.div
          className="flex items-center space-x-8 sm:space-x-10 md:space-x-12 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-12 sm:h-16 md:h-20 lg:h-24 w-auto mx-4 sm:mx-6 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
            >
              <img
                src={sponsor}
                alt={`Sponsor ${index % sponsors.length + 1}`}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorBanner;
