
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  url: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Send Personalized Bulk Emails FAST: Step-by-Step for Gmail",
    excerpt: "A simple, no-code method to send bulk emails that feel personal—using just Gmail + Google Sheets. Perfect for freelancers, marketers, and small business owners.",
    date: "May 8, 2025",
    readTime: "5 min read",
    category: "Automation",
    url: "https://www.linkedin.com/pulse/send-personalized-bulk-emails-fast-step-by-step-gmail-vyshnav-vinod-xjqxc/",
  },
  {
    id: 2,
    title: "Flutter ListView: Your Dynamic List Solution",
    excerpt: "Comprehensive guide to implementing dynamic lists in Flutter applications with practical examples and best practices.",
    date: "April 15, 2025",
    readTime: "8 min read",
    category: "Mobile Development",
    url: "https://medium.com/@iam_yshnav_/flutter-listview-your-dynamic-list-solution-dc50cfe0f869",
  },
  {
    id: 3,
    title: "Understanding Cross-Site Scripting (XSS) Attacks",
    excerpt: "A comprehensive guide to understanding XSS vulnerabilities and how to prevent them in your web applications.",
    date: "March 20, 2025",
    readTime: "8 min read",
    category: "Web Security",
    url: "#",
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
                <Button asChild variant="outline" className="cyber-border w-full text-primary">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Read Article
                  </a>
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
