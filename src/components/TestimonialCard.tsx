import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  index: number;
}

const TestimonialCard = ({
  name,
  role,
  company,
  image,
  testimonial,
  index,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-shadow">
        <div className="space-y-4">
          <Quote className="w-8 h-8 text-primary/30" />
          <p className="text-muted-foreground italic">{testimonial}</p>
          <div className="flex items-center gap-4 pt-4 border-t">
            <Avatar>
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">
                {role} at {company}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
