import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Data Scientist
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Transforming data into actionable insights
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-lg text-foreground/90">
            Welcome to my portfolio. I'm a passionate data science student specializing in 
            machine learning, data engineering, and analytical solutions.
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/projects">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
            >
              View Projects
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Get in Touch
            </Button>
          </Link>
        </div>

        <div className="flex gap-6 justify-center pt-8">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
