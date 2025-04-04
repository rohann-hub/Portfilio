
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, FileCode, Database, Globe, Layout, PenTool } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const SkillsSection: React.FC = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeOut" }
    }),
  };

  const skills: Skill[] = [
    { name: "Python", level: 90, icon: <Code className="h-5 w-5" /> },
    { name: "Java", level: 85, icon: <FileCode className="h-5 w-5" /> },
    { name: "HTML & CSS", level: 95, icon: <Globe className="h-5 w-5" /> },
    { name: "C++", level: 80, icon: <Code className="h-5 w-5" /> },
    { name: "C", level: 85, icon: <FileCode className="h-5 w-5" /> },
    { name: "UI/UX", level: 90, icon: <PenTool className="h-5 w-5" /> },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-gradient">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            I specialize in these technologies and constantly strive to expand my skill set.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <div className="mr-3 text-primary">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <motion.div
                  custom={skill.level}
                  variants={progressVariants}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                ></motion.div>
              </div>
              <div className="mt-2 text-right text-sm text-foreground/60">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
