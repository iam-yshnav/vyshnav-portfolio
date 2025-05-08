
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-1">
            <div className="cyber-card p-2 shadow-lg cyber-glow hover:scale-[1.02] transition-transform duration-300">
              <div className="aspect-square bg-accent/50 rounded-md overflow-hidden">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-circuit-pattern flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30 backdrop-blur-sm">
                    <span className="text-6xl">VV</span>
                  </div>
                </div>
              </div>
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
