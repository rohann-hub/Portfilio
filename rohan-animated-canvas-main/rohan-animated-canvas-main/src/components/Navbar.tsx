
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-gradient">
          Rohan
        </a>
        <div className="hidden md:flex gap-8">
          <a href="#hero" className="text-foreground/80 hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </a>
          <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </a>
        </div>
        <button className="md:hidden text-xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
