
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  email?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  delay?: number;
  position?: string;
  detailedBio?: string;
  showBio?: boolean;
}

const TeamMemberCard = ({
  image,
  name,
  role,
  bio,
  email,
  linkedin,
  facebook,
  twitter,
  instagram,
  delay = 0,
  position,
  detailedBio,
  showBio = false,
}: TeamMemberCardProps) => {
  const socialLinks = [
    email && {
      href: `mailto:${email}`,
      label: `Email ${name}`,
      icon: Mail,
    },
    linkedin && {
      href: linkedin,
      label: `${name}'s LinkedIn profile`,
      icon: Linkedin,
    },
    facebook && {
      href: facebook,
      label: `${name}'s Facebook profile`,
      icon: Facebook,
    },
    twitter && {
      href: twitter,
      label: `${name}'s Twitter profile`,
      icon: Twitter,
    },
    instagram && {
      href: instagram,
      label: `${name}'s Instagram profile`,
      icon: Instagram,
    },
  ].filter(Boolean) as {
    href: string;
    label: string;
    icon: typeof Mail;
  }[];

  return (
    <motion.div
      className="transform transition-all hover:shadow-lg flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="flex justify-center pt-6">
        <div className="w-40 h-40 sm:w-44 sm:h-44 overflow-hidden rounded-3xl relative">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="w-full mt-4 px-6 pb-6 text-center border border-border dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 shadow-md">
        <h3 className="text-xl font-bold text-primary mb-1">{name}</h3>
        {position ? (
          <p className="text-foreground/80 text-sm font-medium mb-2 whitespace-pre-line">{position}</p>
        ) : (
          <p className="text-highlight font-medium mb-2">{role}</p>
        )}
        {position && (
          <p className="text-foreground/70 text-xs uppercase tracking-[0.18em] mb-4">{role}</p>
        )}
        <p className="text-foreground/80 text-sm mb-5">{bio}</p>

        {socialLinks.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-extra/50 text-primary hover:bg-accent hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        )}

        {showBio && detailedBio && (
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-accent/30 px-4 py-2 text-sm font-semibold text-primary transition hover:border-red-600 hover:text-red-600"
              >
                <ArrowRight size={16} />
                See Bio
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
              <DialogHeader>
                <DialogTitle>{name}</DialogTitle>
                {position && (
                  <DialogDescription className="text-sm text-muted-foreground">
                    {position}
                  </DialogDescription>
                )}
                {!position && (
                  <DialogDescription className="text-sm text-muted-foreground">
                    {role}
                  </DialogDescription>
                )}
              </DialogHeader>

              <div className="grid gap-4 sm:grid-cols-[120px_minmax(0,1fr)] items-start">
                <div className="rounded-3xl overflow-hidden border border-accent/20 shadow-sm">
                  <img src={image} alt={name} className="object-cover w-full h-full min-h-[120px]" />
                </div>
                <div className="space-y-4 text-left">
                  <p className="text-sm leading-7 text-foreground/90 whitespace-pre-line">
                    {detailedBio}
                  </p>
                  {socialLinks.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Connect</h4>
                      <div className="flex flex-wrap gap-2">
                        {socialLinks.map((link) => {
                          const Icon = link.icon;
                          return (
                            <a
                              key={link.label}
                              href={link.href}
                              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                              className="inline-flex items-center gap-2 rounded-full border border-muted-foreground/20 px-3 py-2 text-sm text-foreground/80 hover:border-accent hover:text-primary transition"
                              aria-label={link.label}
                            >
                              <Icon size={16} />
                              {link.label.replace(`${name}'s `, "")}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <DialogClose asChild>
                <button className="mt-6 inline-flex justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600">
                  Close
                </button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
