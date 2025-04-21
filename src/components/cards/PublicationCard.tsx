
import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

interface PublicationCardProps {
  title: string;
  authors?: string[];
  team?: string;
  journal: string;
  year: number;
  abstract?: string;
  description?: string;
  doi?: string;
  pdfUrl?: string;
  link?: string;
  delay?: number;
}

const PublicationCard = ({
  title,
  authors,
  team,
  journal,
  year,
  abstract,
  description,
  doi,
  pdfUrl,
  link,
  delay = 0
}: PublicationCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-border dark:border-gray-700 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-full p-3 bg-accent/20 dark:bg-accent/30 text-accent dark:text-accent flex-shrink-0">
          <FileText size={24} />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
          <p className="text-sm text-foreground/70 mb-3">
            {team || (authors && authors.join(", "))}
          </p>
          <p className="text-sm font-medium mb-4">
            {journal} | {year}
          </p>

          {(abstract || description) && (
            <div className="mb-4">
              <div
                className="text-sm text-foreground/80 line-clamp-3"
              >
                {description || abstract}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            {doi && (
              <a
                href={`https://doi.org/${doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-highlight/20 dark:bg-highlight/30 text-highlight dark:text-highlight hover:bg-highlight hover:text-white transition-colors"
              >
                <span>DOI</span>
                <ExternalLink size={12} className="ml-1" />
              </a>
            )}
            {(pdfUrl || link) && (
              <a
                href={pdfUrl || link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-extra/20 dark:bg-extra/30 text-extra-foreground dark:text-extra hover:bg-extra hover:text-extra-foreground transition-colors"
              >
                <span>{pdfUrl ? "View More" : "View"}</span>
                <ExternalLink size={12} className="ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PublicationCard;
