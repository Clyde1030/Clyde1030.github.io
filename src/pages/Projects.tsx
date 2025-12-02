import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import projectsHero from "@/assets/projects-hero.png";

const Projects = () => {
  const scrollProgress = useScrollProgress();
  
  // Calculate opacities based on scroll progress
  const imageOpacity = Math.max(0, 1 - scrollProgress * 2);
  const contentOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.3) * 2));

  return (
    <div className="min-h-screen">
      {/* Hero section with scroll effect */}
      <section className="relative overflow-hidden">
        {/* Image section that fades out */}
        <div 
          className="relative h-[60vh] transition-all duration-300"
          style={{ 
            opacity: imageOpacity
          }}
        >
          <img 
            src={projectsHero} 
            alt="Projects illustration showing data science concepts" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Title below image */}
        <div className="text-center py-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">My Projects</h1>
        </div>

        {/* Content section that fades in */}
        <div 
          className="text-center transition-all duration-300 pb-16"
          style={{ 
            opacity: contentOpacity,
            transform: `translateY(${(1 - contentOpacity) * 20}px)`
          }}
        >
          <div className="space-y-4 px-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">Data Science Portfolio</h2>
            <p className="text-xl text-muted-foreground">
              A collection of my data science and engineering projects showcasing ML, analytics, and data pipelines
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="container mx-auto max-w-6xl space-y-12 px-4 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="p-6 bg-card border-border hover:border-primary transition-all group"
            >
              <div className="space-y-4">
                <Link to={`/projects/${project.id}`}>
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                </Link>
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
