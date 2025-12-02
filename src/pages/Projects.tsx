import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import programmingImage from "@/assets/programming.jpg";

const Projects = () => {
  const scrollProgress = useScrollProgress();

  // Calculate opacities based on scroll progress
  const imageOpacity = Math.max(0, 1 - scrollProgress * 2);
  const imageScale = 1 + scrollProgress * 0.1;
  const contentOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.3) * 2));
  const contentTranslateY = Math.max(0, 30 - scrollProgress * 60);

  return <div className="relative">
      {/* Hero Image Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden" style={{
      opacity: imageOpacity,
      transform: `scale(${imageScale})`,
      transition: 'transform 0.1s ease-out'
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        
        <div className="relative z-10 flex flex-col items-center gap-8 w-full px-4">
          <div className="relative w-full max-w-7xl rounded-2xl overflow-hidden shadow-[0_0_60px_hsl(var(--primary)/0.3)] border-2 border-primary/30">
            <img alt="Programming and data visualization" src={programmingImage} className="w-full h-auto border-0 opacity-85 object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  My Projects
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  A collection of data science and engineering projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="min-h-screen flex items-start justify-center px-4 -mt-screen" style={{
      opacity: contentOpacity,
      transform: `translateY(${contentTranslateY}px)`,
      transition: 'transform 0.1s ease-out'
    }}>

        <div className="w-full max-w-6xl space-y-12 pt-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => <Card key={project.title} className="p-6 bg-card border-border hover:border-primary transition-all group">
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
                  {project.tags.map(tag => <span key={tag} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-mono">
                      {tag}
                    </span>)}
                </div>
                <div className="flex gap-3 pt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                </div>
              </div>
            </Card>)}
        </div>

        <div className="text-center pt-8">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </Button>
          </a>
        </div>
        </div>
      </section>
    </div>;
};
export default Projects;