import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: string;
  thumbnail: string;
  index: number;
}

const CourseCard = ({
  title,
  description,
  instructor,
  duration,
  students,
  thumbnail,
  index,
}: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={16} />
              <span>{students}</span>
            </div>
          </div>
          <p className="text-sm font-medium">By {instructor}</p>
          <Button className="w-full">View Details</Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
