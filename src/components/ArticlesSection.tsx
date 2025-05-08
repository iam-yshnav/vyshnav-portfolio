
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Understanding Cross-Site Scripting (XSS) Attacks",
    excerpt: "A comprehensive guide to understanding XSS vulnerabilities and how to prevent them in your web applications.",
    date: "May 12, 2024",
    readTime: "8 min read",
    category: "Web Security",
  },
  {
    id: 2,
    title: "Introduction to Penetration Testing",
    excerpt: "Learn the basics of ethical hacking and penetration testing methodologies to secure your systems.",
    date: "April 28, 2024",
    readTime: "10 min read",
    category: "Ethical Hacking",
  },
  {
    id: 3,
    title: "Securing Node.js Applications",
    excerpt: "Best practices for building secure Node.js applications and preventing common security vulnerabilities.",
    date: "March 15, 2024",
    readTime: "7 min read",
    category: "Application Security",
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-20">
      <div className="container">
        <h2 className="section-title">Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {articles.map((article) => (
            <Card key={article.id} className="cyber-card hover:shadow-primary/10 hover:-translate-y-1 transition-all">
              <CardHeader>
                <div className="text-xs text-primary mb-2 font-mono">{article.category}</div>
                <CardTitle className="text-lg">{article.title}</CardTitle>
                <CardDescription className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground">{article.excerpt}</p>
              </CardContent>
              
              <CardFooter>
                <Button variant="outline" className="cyber-border w-full text-primary">
                  Read Article
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-cyber">View All Articles</Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
