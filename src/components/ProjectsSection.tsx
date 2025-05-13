
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "INNOVX",
    description: "Platform for student-faculty project exchange, enabling collaboration and resource sharing across departments.",
    technologies: ["HTML", "CSS", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "SENTINEL",
    description: "Collaborative cyber defense platform with gamified token system for training security professionals.",
    technologies: ["Python", "Flask", "HTML", "CSS", "SQLite"],
    githubUrl: "https://github.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-accent/20">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <Card key={project.id} className="cyber-card overflow-hidden hover:shadow-primary/10 hover:-translate-y-1 transition-all">
              <div className="h-48 bg-circuit-pattern flex items-center justify-center">
                <h3 className="text-4xl font-bold text-primary">{project.title}</h3>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-accent rounded-md text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              
              <CardFooter>
                <Button asChild variant="outline" className="cyber-border">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="btn-cyber">
            <Link to="/projects">
              View More Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
