import { Card } from "@/components/ui/card";
import { ChefHat } from "lucide-react";
import aboutHeroImage from "@/assets/about-hero.jpg";
import immersionImage from "@/assets/immersion.jpg";
const About = () => {
  return <div className="min-h-screen">
      {/* Hero Image Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        
        <div className="relative z-10 flex flex-col items-center gap-8 w-full">
          <div className="relative w-full max-h-[70vh] overflow-hidden shadow-[0_0_60px_hsl(var(--primary)/0.3)]">
            <img alt="About Me" src={aboutHeroImage} className="w-full h-full max-h-[70vh] border-0 opacity-85 object-cover object-center" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">About Me</h1>
                <p className="text-xl md:text-2xl text-white/90 mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Passionate about leveraging data to solve complex problems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="min-h-screen flex items-start justify-center px-4 py-16">
        <div className="container mx-auto max-w-5xl space-y-16">
          {/* My Story Timeline Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-center mb-12">My Story</h2>
            
            {/* Timeline Item 1 - Image Left */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
                <Card className="p-6 bg-card border-border overflow-hidden">
                  <img alt="Early interest in data" className="w-full h-64 object-cover rounded-lg" src="/lovable-uploads/cfd36bff-b660-4e1c-a0fa-867e5bdee01d.jpg" />
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Houbi Taiwan is where I am from</h3>
                <p className="text-foreground/90 leading-relaxed">I am originally from Houbi District, Taiwan, a region surrounded by green rice fields and shaped by a long tradition of agriculture. I moved to California with my family in 2016.</p>
              </div>
            </div>

            {/* Timeline connector line */}
            <div className="hidden md:block w-0.5 h-16 bg-primary/30 mx-auto" />

            {/* Timeline Item 2 - Image Right */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 md:order-1">
                <h3 className="text-2xl font-semibold text-primary">UCSB and the Actuarial field</h3>
                <p className="text-foreground/90 leading-relaxed">I began my professional path as an actuarial student, passing three actuarial exams while working at an insurance company in Portland, Oregon. During this time, I became increasingly interested in the tools and technologies that powered our financial reporting processes. While my initial focus was on actuarial modeling, I found myself fascinated by the behind-the-scenes systems that made everything run — from Python scripts and SQL queries to VBA macros automating Excel reports.
My journey in data science began with a fascination for uncovering patterns in complex datasets. What started as curiosity quickly transformed into a passion for leveraging data to solve real-world problems. Currently pursuing studies in Data Science, focusing on advanced statistical methods, machine learning algorithms, and modern data engineering practices. My coursework includes deep learning, natural language processing, and big data technologies.</p>
              </div>
              <div className="relative md:order-2">
                <div className="absolute -left-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
                <Card className="p-6 bg-card border-border overflow-hidden">
                  <img alt="Learning and development" className="w-full h-64 object-cover rounded-lg" src="/lovable-uploads/dd08ea1c-9efc-474a-9f7c-ade41fe6829e.jpg" />
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
                <h3 className="text-2xl font-semibold text-primary">Data Science Journey with MIDS</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Through various projects in machine learning pipelines, data visualization dashboards, and NLP applications, 
                  I've developed expertise in transforming complex data into actionable insights that drive decision-making.
                </p>
              </div>
            </div>
          </div>

          {/* Beyond Data Section - At Bottom */}
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
            <img src={immersionImage} alt="Immersion event" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </div>;
};
export default About;