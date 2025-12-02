import { Card } from "@/components/ui/card";
import { Database, Brain, Code2, TrendingUp } from "lucide-react";

const About = () => {
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
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-5xl space-y-16 animate-slide-up">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Data science student passionate about leveraging data to solve complex problems
          </p>
        </div>

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
      </div>
    </div>
  );
};

export default About;
