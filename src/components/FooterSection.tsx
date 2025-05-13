
import { Github, Linkedin, Instagram } from "lucide-react";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-primary font-bold text-xl mb-2 block">
              <span className="text-primary">&lt;</span>
              <span className="text-white">Vyshnav</span>
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Cybersecurity Student & Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/iam-yshnav" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-card p-2 hover:scale-110 transition-transform"
              >
                <Github className="h-4 w-4 text-primary" />
              </a>
              <a 
                href="https://www.linkedin.com/in/yshnav/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-card p-2 hover:scale-110 transition-transform"
              >
                <Linkedin className="h-4 w-4 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/iam_yshnav_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-card p-2 hover:scale-110 transition-transform"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </a>
            </div>
            
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Vyshnav Vinod. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
