
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const title = "Hi, I'm Rohan";
  const subtitle = "Developer & UI/UX Designer";
  
  return (
    <section id="hero" className="h-screen relative flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 text-center">
        {mounted && (
          <>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-foreground/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {subtitle}
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a 
                href="#projects"
                className="bg-transparent border border-primary text-primary hover:bg-primary/10 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
            </motion.div>
          </>
        )}
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-foreground/50 hover:text-foreground">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
