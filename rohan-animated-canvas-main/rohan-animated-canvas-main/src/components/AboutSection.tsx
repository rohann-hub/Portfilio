
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold mb-2 text-gradient"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-primary mb-8 rounded-full"
            variants={itemVariants}
          ></motion.div>
          
          <motion.p 
            className="text-lg mb-6 text-foreground/90"
            variants={itemVariants}
          >
            I'm a passionate developer and UI/UX designer with a focus on creating beautiful, 
            functional digital experiences. With expertise in multiple programming languages and 
            design principles, I bring a unique perspective to every project.
          </motion.p>
          
          <motion.p 
            className="text-lg mb-6 text-foreground/90"
            variants={itemVariants}
          >
            My approach combines technical know-how with creative problem-solving, 
            allowing me to build solutions that are not only technically sound but also 
            intuitive and enjoyable to use.
          </motion.p>
          
          <motion.p 
            className="text-lg text-foreground/90"
            variants={itemVariants}
          >
            When I'm not coding or designing, you'll find me exploring new technologies, 
            contributing to open-source projects, and continuously expanding my skill set 
            to stay at the forefront of the ever-evolving tech landscape.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl animate-pulse"></div>
    </section>
  );
};

export default AboutSection;
