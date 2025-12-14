import { Card } from "@/components/ui/card";
import { Database, Brain, Code2, TrendingUp, ChefHat, Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import immersionImage from "@/assets/immersion.jpg";
import profileImage from "@/assets/profile.png";
import welcomeBg from "@/assets/welcome-bg.jpg";

const About = () => {
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

  return <div className="pt-16">
      {/* Main content */}
      <div className="container mx-auto max-w-5xl space-y-16 px-4 py-8">
        {/* Welcome Section with Profile */}
        <div className="relative rounded-2xl overflow-hidden -mx-4 -mt-8">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${welcomeBg})` }}
          />
          {/* Fade Overlay */}
          <div className="absolute inset-0 bg-background/40" />
          
          {/* Content */}
          <div className="relative text-center space-y-8 py-16 px-8">
            <div className="flex justify-center mb-6">
              <Avatar className="h-80 w-80 border-4 border-primary/20 shadow-glow">
                <AvatarImage src={profileImage} alt="Profile" className="object-cover object-[center_20%]" />
                <AvatarFallback>DS</AvatarFallback>
              </Avatar>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg text-foreground/90">Welcome to my portfolio. My name is Yu-Sheng Lee, and I go by Clyde. I'm a passionate data science student specializing in machine learning, data engineering, and analytical solutions.</p>
            </div>
          </div>
        </div>

        {/* Skills & Expertise Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map(skill => <Card key={skill.title} className="p-6 bg-card border-border hover:border-primary transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>

        {/* My Story Timeline Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center mb-12">My Story</h2>
          
          {/* Timeline Item 1 - Image Left */}
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute -right-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
              <Card className="p-6 bg-card border-border overflow-hidden">
                <img src="/lovable-uploads/bd7abfaa-e239-4426-b764-19c6b2ca548b.jpg" alt="Early interest in data" className="w-full h-64 object-cover rounded-lg" />
              </Card>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">The Beginning</h3>
              <p className="text-foreground/90 leading-relaxed">
                I am from Taiwan. I began my professional path as an actuarial student, passing three actuarial exams while working at an insurance company in Portland, Oregon. During this time, I became increasingly interested in the tools and technologies that powered our financial reporting processes. While my initial focus was on actuarial modeling, I found myself fascinated by the behind-the-scenes systems that made everything run — from Python scripts and SQL queries to VBA macros automating Excel reports. 
              </p>
            </div>
          </div>

          {/* Timeline connector line */}
          <div className="hidden md:block w-0.5 h-16 bg-primary/30 mx-auto" />

          {/* Timeline Item 2 - Image Right */}
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 md:order-1">
              <h3 className="text-2xl font-semibold text-primary">Education & Growth</h3>
              <p className="text-foreground/90 leading-relaxed">My journey in data science began with a fascination for uncovering patterns in complex datasets. What started as curiosity quickly transformed into a passion for leveraging data to solve real-world problems. Currently pursuing studies in Data Science, focusing on advanced statistical methods, machine learning algorithms, and modern data engineering practices. My coursework includes deep learning, natural language processing, and big data technologies.</p>
            </div>
            <div className="relative md:order-2">
              <div className="absolute -left-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
              <Card className="p-6 bg-card border-border overflow-hidden">
                <img src="/lovable-uploads/15d0b658-378b-41a7-bebc-1352c327072d.png" alt="Learning and development" className="w-full h-64 object-cover rounded-lg" />
              </Card>
            </div>
          </div>

          {/* Timeline connector line */}
          <div className="hidden md:block w-0.5 h-16 bg-primary/30 mx-auto" />

          {/* Timeline Item 3 - Image Left */}
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute -right-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
              <Card className="p-6 bg-card border-border overflow-hidden">
                <img src="/lovable-uploads/e261f6f4-40a1-4cf7-a6ee-9173de814fe3.png" alt="Building projects" className="w-full h-64 object-cover rounded-lg" />
              </Card>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Hands-On Experience</h3>
              <p className="text-foreground/90 leading-relaxed">
                Through various projects in machine learning pipelines, data visualization dashboards, and NLP applications, 
                I've developed expertise in transforming complex data into actionable insights that drive decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Beyond Data Section */}
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

        {/* CTA Section - Bottom */}
        <div className="text-center space-y-8 pt-8">
          <div className="flex gap-4 justify-center flex-wrap">
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

          <div className="flex gap-6 justify-center">
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
      </div>
    </div>;
};
export default About;