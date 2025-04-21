
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
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all hover:shadow-lg dark:border dark:border-gray-700 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="flex justify-center pt-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent/20 shadow-md relative hover:scale-105 transition-transform duration-300 team-member-image-gradient">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
        <p className="text-highlight font-medium mb-2">{role}</p>
        {position && (
          <p className="text-foreground/70 text-sm mb-3 italic whitespace-pre-line">{position}</p>
        )}
        <p className="text-foreground/80 text-sm mb-4">{bio}</p>

        {(email || linkedin) && (
          <div className="flex justify-center space-x-3 mt-4">
            {email && (
              <a
                href={`mailto:${email}`}
                className="p-2 rounded-full bg-extra/50 text-primary hover:bg-accent hover:text-white transition-colors"
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
                className="p-2 rounded-full bg-extra/50 text-primary hover:bg-accent hover:text-white transition-colors"
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
