
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Github, Linkedin, Instagram } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#articles", label: "Articles" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-4 flex items-center justify-between">
        <a href="#home" className="text-primary font-bold text-xl">
          <span className="text-primary">&lt;</span>
          <span className="text-white">Vyshnav</span>
          <span className="text-primary">/&gt;</span>
        </a>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {isOpen && (
              <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-md p-6">
                <nav className="flex flex-col space-y-6 text-center">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium cyber-link"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="flex justify-center space-x-4 pt-4">
                    <a href="https://github.com/iam-yshnav" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/yshnav/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/iam_yshnav_" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                      <Instagram size={20} />
                    </a>
                  </div>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navLinks.map((link) => (
                  <NavigationMenuLink
                    key={link.href}
                    href={link.href}
                    className={`${navigationMenuTriggerStyle()} px-3 py-1 font-medium hover:text-primary`}
                  >
                    {link.label}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex space-x-3">
              <a href="https://github.com/iam-yshnav" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yshnav/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/iam_yshnav_" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
