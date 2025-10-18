import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import CompanyLogo from "@/components/CompanyLogo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Laptop,
  Briefcase,
  Users,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Laptop,
      title: "Build your own Lovable App",
      description: "Create production-ready applications with modern frameworks and best practices",
    },
    {
      icon: Briefcase,
      title: "Placement Assistance",
      description: "Get expert guidance and support to land your dream job at top companies",
    },
    {
      icon: Users,
      title: "1:1 Mentorship & Doubt Support",
      description: "Personal guidance from industry experts whenever you need it",
    },
  ];

  const courses = [
    {
      title: "Complete Spring Boot Masterclass",
      description: "Master Spring Boot from basics to advanced concepts with 3 major real-world projects",
      instructor: "John Doe",
      duration: "12 weeks",
      students: "5,000+",
      thumbnail: "/placeholder.svg",
    },
    {
      title: "Microservices Architecture",
      description: "Learn to build scalable microservices with Spring Cloud, Docker, and Kubernetes",
      instructor: "Jane Smith",
      duration: "10 weeks",
      students: "3,500+",
      thumbnail: "/placeholder.svg",
    },
    {
      title: "Full Stack Development",
      description: "Become a full-stack developer with React, Spring Boot, and PostgreSQL",
      instructor: "Mike Johnson",
      duration: "16 weeks",
      students: "7,200+",
      thumbnail: "/placeholder.svg",
    },
  ];

  const companies = [
    "Google",
    "Amazon",
    "Microsoft",
    "Uber",
    "Netflix",
    "Meta",
    "Apple",
    "Spotify",
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      company: "Google",
      image: "/placeholder.svg",
      testimonial:
        "CodeSeed's Spring Boot course was incredible! The hands-on projects helped me land my dream job at Google.",
    },
    {
      name: "Priya Patel",
      role: "Backend Developer",
      company: "Amazon",
      image: "/placeholder.svg",
      testimonial:
        "The mentorship and placement support were outstanding. Got placed at Amazon within 2 months of course completion!",
    },
    {
      name: "Arjun Reddy",
      role: "Full Stack Developer",
      company: "Microsoft",
      image: "/placeholder.svg",
      testimonial:
        "Best investment in my career! The practical approach and real-world projects made all the difference.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(217,91%,60%,0.15)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Learn Spring Boot the{" "}
              <span className="text-primary">Modern Way</span> with 3 Major
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master enterprise-grade Spring Boot development with hands-on
              projects, expert mentorship, and guaranteed placement support
            </p>
            <Button size="lg" className="text-lg px-8">
              Enroll Now <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Popular Courses
          </h2>
          <p className="text-muted-foreground">
            Industry-relevant curriculum designed by experts
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} index={index} />
          ))}
        </div>
      </section>

      {/* Placement Companies */}
      <section id="placements" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              1000+ Alumni Placed At
            </h2>
            <p className="text-muted-foreground">
              Our students work at the world's leading companies
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <CompanyLogo key={index} name={company} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Student Success Stories
          </h2>
          <p className="text-muted-foreground">
            Hear from our successful alumni
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Are We Different?
          </h2>
        </motion.div>
        <Card className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Features</TableHead>
                <TableHead className="text-center">CodeSeed</TableHead>
                <TableHead className="text-center">Other Platforms</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Real Projects</TableCell>
                <TableCell className="text-center">
                  <CheckCircle2 className="inline text-primary" />
                </TableCell>
                <TableCell className="text-center">
                  <XCircle className="inline text-muted-foreground" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">1:1 Mentorship</TableCell>
                <TableCell className="text-center">
                  <CheckCircle2 className="inline text-primary" />
                </TableCell>
                <TableCell className="text-center">
                  <XCircle className="inline text-muted-foreground" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Placement Assistance
                </TableCell>
                <TableCell className="text-center">
                  <CheckCircle2 className="inline text-primary" />
                </TableCell>
                <TableCell className="text-center">
                  <XCircle className="inline text-muted-foreground" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Lifetime Access</TableCell>
                <TableCell className="text-center">
                  <CheckCircle2 className="inline text-primary" />
                </TableCell>
                <TableCell className="text-center">
                  <XCircle className="inline text-muted-foreground" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Community Section */}
      <section id="contact" className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Learn & Grow with a Community
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of learners just like you on Discord
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Join the Discord <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
