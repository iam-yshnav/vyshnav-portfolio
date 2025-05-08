
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Skill {
  id: number;
  name: string;
  level: number; // 0-100
}

interface Language {
  id: number;
  name: string;
  proficiency: string;
}

const techSkills: Skill[] = [
  { id: 1, name: "HTML & CSS", level: 90 },
  { id: 2, name: "JavaScript", level: 85 },
  { id: 3, name: "Node.js", level: 80 },
  { id: 4, name: "MongoDB", level: 75 },
  { id: 5, name: "Python", level: 85 },
  { id: 6, name: "Flask", level: 70 },
  { id: 7, name: "WordPress", level: 80 },
  { id: 8, name: "Cybersecurity Tools", level: 90 },
];

const languages: Language[] = [
  { id: 1, name: "English", proficiency: "Professional" },
  { id: 2, name: "Malayalam", proficiency: "Native" },
  { id: 3, name: "Tamil", proficiency: "Basic" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="section-title">Skills & Languages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {techSkills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-primary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress animate-pulse-glow"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {languages.map((language) => (
                  <div 
                    key={language.id}
                    className="flex justify-between items-center p-3 border border-primary/30 rounded-md hover:border-primary/60 transition-all"
                  >
                    <span className="font-medium">{language.name}</span>
                    <span className="text-sm text-primary">{language.proficiency}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
