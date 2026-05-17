import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  registrationUrl?: string;
  delay?: number;
  isPast?: boolean;
}
// EventCardProps is defined in the parent component (Events.tsx) and passed down to this component. 
// It includes all necessary event data such as title, date, time, location, description, image URL, registration URL, animation delay, and whether the event is past or upcoming.

const EventCard = ({
  id,
  title,
  date,
  time,
  location,
  description,
  imageUrl,
  registrationUrl,
  delay = 0,
  isPast = false
}: EventCardProps) => {
  const detailLink = isPast ? `/events/past/${id}` : `/events/${id}`;
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-border dark:border-gray-700 group hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      {/* Image Section with Zoom and Overlay */}
      <div className="relative h-64 overflow-hidden">
        {imageUrl && (
          <>
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Date Rectangle Box (with Ken Burns Effect) */}
            <div className="absolute bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg z-10 font-bold text-center min-w-[80px]">
              {(() => {
                // Uses the first word (the day), remove commas, and take first 3 letters
                const parts = date.split(' ');
                const dayName = parts[0].replace(',', '').substring(0, 3).toUpperCase();
                
                // Put all others below
                const dateDetails = parts.slice(1).join(' ');

                return (
                  <>
                    <span className="block text-2xl border-b border-white/30 pb-1 mb-1">
                      {dayName}
                    </span>
                    <span className="block text-[10px] uppercase tracking-tighter leading-tight max-w-[90px]">
                      {dateDetails}
                    </span>
                  </>
                );
              })()}
            </div>
          </>
        )}
      </div>

      {/* Text Information Area */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Location (Above Title) */}
        <div className="flex items-center text-red-600 dark:text-red-400 font-normal text-sm mb-3 uppercase tracking-wide">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>

        <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-red-600 transition-colors">
          {title}
        </h3>

        <div className="flex items-center text-sm text-foreground/60 mb-4">
          <Clock size={16} className="mr-1" />
          <span>{time}</span>
        </div>

        <p className="text-foreground/80 text-sm mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Buttons Section (at the bottom) */}
        <div className="mt-auto flex flex-wrap gap-3 pt-4 border-t border-border">
           <Link
              to={detailLink}
              className="inline-flex items-center px-4 py-2 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-sm"
            >
              View Details
            </Link>
           
           {registrationUrl && (
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-all text-sm shadow-md"
            >
              Register
              <ArrowRight size={16} className="ml-2" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;