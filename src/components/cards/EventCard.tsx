
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
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

const EventCard = ({
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
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-border dark:border-gray-700 group hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      {imageUrl && (
        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-highlight transition-colors">
          {title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-foreground/70">
            <Calendar size={16} className="mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-foreground/70">
            <Clock size={16} className="mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm text-foreground/70">
            <MapPin size={16} className="mr-2" />
            <span>{location}</span>
          </div>
        </div>

        <p className="text-foreground/80 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
                      {!isPast && (
                        <Link
                          to="/fbms-conference"
                          className="inline-flex items-center px-4 py-2 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors"
                        >
                          <span>View Details</span>
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      )}
                      {registrationUrl && (
                        <a
                          href={registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-extra text-primary font-medium rounded-md hover:bg-extra/70 transition-colors"
                        >
                          <span>Register</span>
                          <ArrowRight size={16} className="ml-1" />
                        </a>
                      )}
                    </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
