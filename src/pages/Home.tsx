import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import heroImage from "@/assets/background.jpg";
import profilePhoto from "@/assets/profile-photo.png";
const Home = () => {
  const scrollProgress = useScrollProgress();

  // Calculate opacities based on scroll progress
  const imageOpacity = Math.max(0, 1 - scrollProgress * 2);
  const imageScale = 1 + scrollProgress * 0.1;
  const contentOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.3) * 2));
  const contentTranslateY = Math.max(0, 30 - scrollProgress * 60);
  return <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20" style={{
      opacity: imageOpacity,
      transform: `scale(${imageScale})`,
      transition: 'transform 0.1s ease-out'
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
                <img 
                  src={profilePhoto} 
                  alt="Professional Profile" 
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.3)]"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left space-y-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
                  Data Scientist
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Transforming data into actionable insights
                </p>
              </div>

              <p className="text-lg text-foreground/80 max-w-xl">
                Welcome to my portfolio. I&apos;m a passionate data science student specializing in 
                machine learning, data engineering, and analytical solutions.
              </p>

              <div className="flex gap-4 justify-center md:justify-start flex-wrap pt-4">
                <Link to="/projects">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                    View Projects
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Get in Touch
                  </Button>
                </Link>
              </div>

              <div className="flex gap-6 justify-center md:justify-start pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {scrollProgress < 0.2 && (
            <div className="flex justify-center mt-12 animate-bounce">
              <ChevronDown className="w-8 h-8 text-muted-foreground" />
            </div>
          )}
        </div>
      </section>

    </div>;
};
export default Home;