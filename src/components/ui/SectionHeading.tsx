
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  children?: ReactNode;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = "center",
  children 
}: SectionHeadingProps) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <div className={`mb-12 ${alignClasses[align]}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-primary mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}

      {children}
    </div>
  );
};

export default SectionHeading;
