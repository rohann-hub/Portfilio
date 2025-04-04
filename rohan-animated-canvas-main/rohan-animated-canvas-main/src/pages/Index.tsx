
import React, { useEffect, useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CustomContactSection from "@/components/CustomContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold animate-pulse text-gradient mb-4">
            Rohan
          </h1>
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CustomContactSection 
        email="notrhn69@gmail.com"
        phone="+91 9862989898"
        location="Agartala"
      />
      <Footer />
    </div>
  );
};

export default Index;
