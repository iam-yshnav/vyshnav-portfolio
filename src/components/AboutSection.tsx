
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="relative w-full max-w-[280px] mx-auto">
              {/* Outer glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-md opacity-70"></div>
              
              {/* Main circular avatar */}
              <Avatar className="w-full h-auto aspect-square border-4 border-primary/30 cyber-glow hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <AvatarImage 
                  src="/lovable-uploads/a9beb0a3-4515-4b80-b659-9f6ff12d5449.png" 
                  alt="Vyshnav Vinod" 
                  className="object-cover"
                />
              </Avatar>
              
              {/* Decorative cyber elements */}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-2 border-primary rounded-full animate-pulse"></div>
              <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-secondary rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
              
              {/* Tech circuit lines */}
              <div className="absolute top-1/4 -right-4 w-16 h-[2px] bg-primary/40"></div>
              <div className="absolute bottom-1/4 -left-4 w-16 h-[2px] bg-secondary/40"></div>
            </div>
          </div>
          
          <div className="md:col-span-2 flex flex-col justify-center">
            <Card className="cyber-card p-6">
              <CardContent className="pt-4">
                <p className="text-lg leading-relaxed text-gray-300 mb-4">
                  I'm a 4th-year B.Tech Computer Science student specializing in Cybersecurity, passionate about app development, web security, and creative problem-solving.
                </p>
                <p className="text-lg leading-relaxed text-gray-300 mb-4">
                  Skilled in frontend development, cybersecurity tools, and team leadership, with a strong track record of delivering innovative projects and collaborating with industry experts.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="cyber-card p-4 border border-primary/20 text-center hover:border-primary/50 transition-all">
                    <div className="text-3xl font-bold text-primary mb-2">2+</div>
                    <div className="text-sm text-gray-400">Years of Experience</div>
                  </div>
                  <div className="cyber-card p-4 border border-primary/20 text-center hover:border-primary/50 transition-all">
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
