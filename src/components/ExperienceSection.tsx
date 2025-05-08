
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "WordPress Developer Intern",
    company: "The HA Foundation",
    period: "2025",
    description: "Designed and optimized websites for maximum user engagement and accessibility. Implemented responsive design principles and SEO best practices.",
  },
  {
    id: 2,
    role: "Cybersecurity Intern",
    company: "SkillDzire x AICTE",
    period: "2024",
    description: "Tackled real-world security challenges in a collaborative environment. Performed vulnerability assessments and implemented security controls.",
  },
  {
    id: 3,
    role: "Development Lead",
    company: "ICET",
    period: "2023",
    description: "Led the department website creation project, managing a team of developers and ensuring timely delivery of features.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-accent/20">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline mt-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="mb-2">
                <span className="text-xs font-mono text-primary">{exp.period}</span>
              </div>
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle>{exp.role}</CardTitle>
                  <CardDescription>{exp.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
