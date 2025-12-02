import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Machine Learning Pipeline",
      description: "Built an end-to-end ML pipeline for predictive analytics with automated model training and deployment.",
      tags: ["Python", "Scikit-learn", "Docker"],
      github: "https://github.com/yourusername/project1",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for real-time data visualization and analytics using modern web technologies.",
      tags: ["React", "D3.js", "PostgreSQL"],
      github: "https://github.com/yourusername/project2",
    },
    {
      title: "NLP Sentiment Analysis",
      description: "Natural language processing project analyzing sentiment in social media data using transformer models.",
      tags: ["Python", "PyTorch", "BERT"],
      github: "https://github.com/yourusername/project3",
    },
    {
      title: "ETL Data Pipeline",
      description: "Scalable ETL pipeline processing large datasets with Apache Spark and cloud infrastructure.",
      tags: ["Spark", "AWS", "Python"],
      github: "https://github.com/yourusername/project4",
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl space-y-12 animate-slide-up">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my data science and engineering projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="p-6 bg-card border-border hover:border-primary transition-all group"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center pt-8">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
