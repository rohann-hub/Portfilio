
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-gradient font-bold text-2xl mb-2">Rohan</h3>
          <p className="text-foreground/60 mb-4">Developer & UI/UX Designer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">Instagram</a>
          </div>
          <div className="text-sm text-foreground/50">
            <p>&copy; {new Date().getFullYear()} Rohan. All rights reserved.</p>
            <p className="mt-1">Designed & Developed with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
