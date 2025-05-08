
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  score: string;
}

const educations: Education[] = [
  {
    id: 1,
    degree: "B.Tech CSE (Cybersecurity)",
    institution: "ICET",
    period: "2021–2025",
    score: "7.82 CGPA",
  },
  {
    id: 2,
    degree: "Plus Two (Computer Science)",
    institution: "Higher Secondary",
    period: "2019-2021",
    score: "94%",
  },
  {
    id: 3,
    degree: "SSLC",
    institution: "Secondary School",
    period: "2018-2019",
    score: "95%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {educations.map((edu) => (
            <Card key={edu.id} className="cyber-card hover:shadow-primary/10 hover:-translate-y-1 transition-all">
              <div className="h-16 bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/20 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">{edu.period}</span>
              </div>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-2 border border-primary/30 rounded-md">
                  <span className="text-lg font-semibold text-primary">{edu.score}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
