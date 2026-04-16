import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, description, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}
  >
    {badge && (
      <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-primary">
        {badge}
      </span>
    )}
    <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-muted-foreground">{description}</p>}
  </motion.div>
);

export default SectionHeading;
