import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => (
  <section className="page-banner">
    <div className="relative z-10 container mx-auto py-20 pt-32">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary-foreground text-center"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary-foreground/80 text-center mt-4 max-w-xl mx-auto text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageBanner;
