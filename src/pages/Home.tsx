import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ChevronDown, Database, Brain, Code2, TrendingUp } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/background.jpg";
import profileImage from "@/assets/profile.png";
const skills = [{
  icon: Brain,
  title: "Machine Learning",
  description: "Building predictive models and implementing ML algorithms"
}, {
  icon: Database,
  title: "Data Engineering",
  description: "Designing and optimizing data pipelines and architectures"
}, {
  icon: Code2,
  title: "Programming",
  description: "Python, R, SQL, and modern data science tools"
}, {
  icon: TrendingUp,
  title: "Analytics",
  description: "Statistical analysis and data visualization"
}];
const Home = () => {
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
        
        <div className="relative z-10 flex flex-col items-center gap-8 w-full">
          <div className="relative w-full overflow-hidden shadow-[0_0_60px_hsl(var(--primary)/0.3)]">
            <img alt="Data Science Workspace" className="w-full h-auto border-0 opacity-85 object-cover" src="/lovable-uploads/fd56ed54-d3cf-4adb-9750-4abcc3b7d01f.png" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Your Next Data Scientist</h2>
                <p className="text-xl md:text-2xl text-white/90 mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Transforming data into actionable insights
                </p>
              </div>
            </div>
          </div>
          
          {scrollProgress < 0.2 && <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-muted-foreground" />
            </div>}
        </div>
      </section>

      {/* Content Section */}
      <section style={{
      opacity: contentOpacity,
      transform: `translateY(${contentTranslateY}px)`,
      transition: 'transform 0.1s ease-out'
    }} className="min-h-screen flex items-center justify-center px-4 -mt-screen bg-blue-200">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="flex justify-center mb-6">
            <Avatar className="h-80 w-80 border-4 border-primary/20 shadow-glow">
              <AvatarImage src={profileImage} alt="Profile" className="object-cover object-[center_20%]" />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-foreground/90">Welcome to my portfolio. My name is Yu-Sheng Lee, and I go by Clyde. I'm a passionate data science student specializing in machine learning, data engineering, and analytical solutions.</p>
          </div>

          {/* Skills & Expertise Section */}
          <div className="w-full bg-white rounded-xl p-8 mt-8">
            <h2 className="text-3xl font-semibold mb-8 text-center text-foreground">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map(skill => <Card key={skill.title} className="p-6 bg-card border-border hover:border-primary transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{skill.title}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap pt-4">
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

          <div className="flex gap-6 justify-center pt-8">
            <a href="https://github.com/Clyde1030" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/yushengclydelee/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:yushenglee@berkeley.edu" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;