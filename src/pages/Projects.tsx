
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Monitor, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  category: "cybersecurity" | "development";
  fullDescription: string;
}

const projectsData: ProjectDetails[] = [
  {
    id: 1,
    title: "INNOVX",
    description: "Platform for student-faculty project exchange, enabling collaboration and resource sharing across departments.",
    fullDescription: "INNOVX is a comprehensive platform designed to facilitate collaboration between students and faculty across different departments. The platform enables resource sharing, project tracking, and efficient communication to enhance academic projects. It includes features like real-time notifications, document repositories, and progress tracking dashboards.",
    technologies: ["HTML", "CSS", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/iam-yshnav",
    demoUrl: "https://github.com/iam-yshnav",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "development"
  },
  {
    id: 2,
    title: "SENTINEL",
    description: "Collaborative cyber defense platform with gamified token system for training security professionals.",
    fullDescription: "SENTINEL is an innovative cyber defense training platform that uses gamification to enhance learning experiences for security professionals. The platform simulates real-world attack scenarios and rewards users with tokens for successfully identifying and mitigating threats. These tokens can be exchanged for additional training modules or recognition badges within the professional community.",
    technologies: ["Python", "Flask", "HTML", "CSS", "SQLite"],
    githubUrl: "https://github.com/iam-yshnav",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "cybersecurity"
  },
  {
    id: 3,
    title: "WordPress - The Healthy Aging Foundation",
    description: "Custom WordPress website development for The Healthy Aging Foundation with specialized course and index pages.",
    fullDescription: "Developed responsive and user-friendly WordPress website for The Healthy Aging Foundation, focusing on two key sections: a comprehensive course catalog page (thehafoundation.com/courses) and a specialized health index page (thehafoundation.com/haindex/). The project involved custom WordPress theme development, responsive design implementation, and content optimization for healthcare education.",
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/iam-yshnav",
    demoUrl: "https://thehafoundation.com/courses",
    imageUrl: "https://images.unsplash.com/photo-1481487196290-c152efe083f5",
    category: "cybersecurity"
  }
];

const Projects = () => {
  const cybersecurityProjects = projectsData.filter(project => project.category === "cybersecurity");
  const developmentProjects = projectsData.filter(project => project.category === "development");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center">
          <Button asChild variant="ghost" className="mr-4 cyber-border">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold">Project Showcase</h1>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full mb-8 grid grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="all" className="data-[state=active]:cyber-glow">All Projects</TabsTrigger>
            <TabsTrigger value="cybersecurity" className="data-[state=active]:cyber-glow">Cybersecurity</TabsTrigger>
            <TabsTrigger value="development" className="data-[state=active]:cyber-glow">Development</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cybersecurity" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cybersecurityProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="development" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {developmentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: ProjectDetails }) => {
  return (
    <Card className="cyber-card overflow-hidden hover:shadow-primary/10 hover:-translate-y-1 transition-all">
      {project.imageUrl && (
        <div className="relative h-64 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="px-2 py-1 text-xs bg-primary rounded-md text-primary-foreground">
              {project.category}
            </span>
          </div>
        </div>
      )}
      
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
        <p className="text-muted-foreground">{project.fullDescription}</p>
      </CardContent>
      
      <CardFooter className="flex gap-4">
        <Button asChild variant="outline" className="cyber-border">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        </Button>
        
        {project.demoUrl && (
          <Button asChild className="cyber-border">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Projects;
