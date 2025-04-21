
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  email?: string;
  linkedin?: string;
  delay?: number;
  position?: string;
  detailedBio?: string;
}

const TeamMemberCard = ({
  image,
  name,
  role,
  bio,
  email,
  linkedin,
  delay = 0,
  position,
  detailedBio
}: TeamMemberCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="aspect-w-3 aspect-h-4 relative">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary">{name}</h3>
        <p className="text-accent font-medium mb-1">{role}</p>
        {position && (
          <p className="text-foreground/70 text-sm mb-3 italic whitespace-pre-line">{position}</p>
        )}
        <p className="text-foreground/80 text-sm mb-4">{bio}</p>

        {(email || linkedin) && (
          <div className="flex space-x-3 mt-4">
            {email && (
              <a
                href={`mailto:${email}`}
                className="p-2 rounded-full bg-secondary text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail size={18} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
