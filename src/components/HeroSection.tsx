
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center matrix-bg overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div 
          className={`max-w-3xl transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block mb-2 px-3 py-1 border border-primary text-primary text-sm font-mono rounded-md">
            Hello, World! I am
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Vyshnav </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Vinod
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-muted mb-6 typing-animation">
            Cybersecurity Student & Developer
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl text-muted-foreground">
            Securing the digital future with innovative solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="cyber-card p-3 flex items-center gap-2">
              <span className="text-primary">+91 8590213931</span>
            </div>
            <div className="cyber-card p-3 flex items-center gap-2">
              <span className="text-primary">vyshnav.vnod@gmail.com</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center">
            <Button asChild className="btn-cyber">
              <a href="#projects">Explore My Work</a>
            </Button>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-card p-3 hover:scale-110 transition-transform"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-card p-3 hover:scale-110 transition-transform"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-card p-3 hover:scale-110 transition-transform"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="text-primary animate-bounce"
          aria-label="Scroll down"
        >
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
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
