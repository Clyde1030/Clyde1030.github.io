import { Card } from "@/components/ui/card";
import { Database, Brain, Code2, TrendingUp, ChefHat } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const About = () => {
  const scrollProgress = useScrollProgress();
  
  // Calculate opacities based on scroll progress
  const imageOpacity = Math.max(0, 1 - scrollProgress * 2);
  const contentOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.3) * 2));
  
  const skills = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building predictive models and implementing ML algorithms",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing and optimizing data pipelines and architectures",
    },
    {
      icon: Code2,
      title: "Programming",
      description: "Python, R, SQL, and modern data science tools",
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Statistical analysis and data visualization",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section with scroll effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image section that fades out */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{ 
            opacity: imageOpacity,
            transform: `scale(${0.95 + imageOpacity * 0.05})`
          }}
        >
          <div className="text-center space-y-6 px-4">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/20">
              <span className="text-6xl font-bold text-primary">ME</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">About Me</h1>
          </div>
        </div>

        {/* Content section that fades in */}
        <div 
          className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{ 
            opacity: contentOpacity,
            transform: `translateY(${(1 - contentOpacity) * 20}px)`
          }}
        >
          <div className="text-center space-y-4 px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold">Data Scientist</h2>
            <p className="text-xl text-muted-foreground">
              Passionate about leveraging data to solve complex problems and create meaningful insights
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="container mx-auto max-w-5xl space-y-16 px-4 py-16">
        <div className="space-y-6">
          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Background</h2>
            <p className="text-foreground/90 leading-relaxed">
              I'm currently pursuing my studies in data science, where I'm developing expertise in 
              machine learning, statistical analysis, and data engineering. My journey in data science 
              has been driven by curiosity and a desire to extract meaningful insights from complex datasets.
            </p>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Education</h2>
            <p className="text-foreground/90 leading-relaxed">
              Currently studying Data Science, focusing on advanced statistical methods, machine learning 
              algorithms, and modern data engineering practices. My coursework includes deep learning, 
              natural language processing, and big data technologies.
            </p>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-8 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <Card 
                key={skill.title} 
                className="p-6 bg-card border-border hover:border-primary transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Life Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Beyond Data</h2>
          <Card className="p-8 bg-card border-border">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-lg bg-primary/10 text-primary shrink-0">
                <ChefHat className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Cooking Enthusiast</h3>
                <p className="text-foreground/90 leading-relaxed">
                  When I'm not analyzing data or training models, you'll find me in the kitchen experimenting 
                  with new recipes and flavors. I approach cooking much like data science—with curiosity, 
                  precision, and a willingness to iterate until I get the perfect result. Whether it's mastering 
                  a complex dish or creating my own recipes, cooking allows me to express creativity while 
                  following structured processes, much like building a well-architected data pipeline.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  I particularly enjoy exploring international cuisines and the science behind cooking techniques. 
                  From understanding the Maillard reaction to perfecting fermentation processes, cooking provides 
                  a delicious intersection of art and science that keeps me engaged outside of my professional work.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
