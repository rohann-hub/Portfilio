
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
}

const ProjectsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product catalog, and payment integration.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg",
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations and interactive elements.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/placeholder.svg",
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality and real-time updates.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "/placeholder.svg",
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard displaying forecast data with interactive charts and location tracking.",
      tags: ["JavaScript", "APIs", "Chart.js"],
      image: "/placeholder.svg",
      githubLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-gradient">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-muted/50 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="flex items-center text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="flex items-center text-foreground/70 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-20 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl animate-pulse"></div>
    </section>
  );
};

export default ProjectsSection;
