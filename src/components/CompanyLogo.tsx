import { motion } from "framer-motion";

interface CompanyLogoProps {
  name: string;
  index: number;
}

const CompanyLogo = ({ name, index }: CompanyLogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-card border rounded-lg p-6 flex items-center justify-center hover:border-primary transition-colors"
    >
      <span className="text-xl font-bold text-muted-foreground">{name}</span>
    </motion.div>
  );
};

export default CompanyLogo;
