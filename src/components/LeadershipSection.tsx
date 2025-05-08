
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Leadership {
  id: number;
  role: string;
  organization: string;
  period: string;
}

const leaderships: Leadership[] = [
  {
    id: 1,
    role: "IEDC Community Lead",
    organization: "Innovation & Entrepreneurship Development Cell",
    period: "2024–Present",
  },
  {
    id: 2,
    role: "University Union Councillor",
    organization: "University Student Union",
    period: "2024–2025",
  },
  {
    id: 3,
    role: "Game Development Club Executive",
    organization: "College Game Development Club",
    period: "2024–Present",
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-20 bg-accent/20">
      <div className="container">
        <h2 className="section-title">Leadership & Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {leaderships.map((leadership) => (
            <Card key={leadership.id} className="cyber-card hover:shadow-primary/10 hover:-translate-y-1 transition-all">
              <CardHeader className="pb-2">
                <Badge className="mb-2 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30">
                  {leadership.period}
                </Badge>
                <CardTitle className="text-lg">{leadership.role}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{leadership.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
