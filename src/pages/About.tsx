import { Card } from "@/components/ui/card";
import { ChefHat } from "lucide-react";
import aboutHeroImage from "@/assets/about-hero.jpg";
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
                  <img alt="Early interest in data" className="w-full h-64 object-cover rounded-lg" src="/lovable-uploads/432403e8-b809-4598-9210-2eb1db8a85b8.png" />
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
                <p className="text-foreground/90 leading-relaxed">After graduating from UC Santa Barbara, I began my professional path as an actuarial student. I passed 3 actuarial exams while working at insurance companies located in Portland, Oregon, and St. Louis, MO. During this time, I became increasingly interested in the tools and technologies that powered our financial reporting processes. </p>
              </div>
              <div className="relative md:order-2">
                <div className="absolute -left-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
                <Card className="p-6 bg-card border-border overflow-hidden">
                  <img alt="Learning and development" className="w-full h-64 object-cover object-top rounded-lg" src="/lovable-uploads/5672ad74-496d-40d7-af05-19ab6d4ba63a.jpg" />
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
                  <img alt="Building projects" className="w-full h-64 object-cover rounded-lg" src="/lovable-uploads/110ab2e8-3b5d-4360-8ca2-62b5c8527f8c.jpg" />
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Stepping into Data Field</h3>
                <p className="text-foreground/90 leading-relaxed">Working in actuarial and financial reporting gave me a lot of exposure in data. While my initial focus was on actuarial modeling, I found myself fascinated by the behind-the-scenes systems that made everything run — from Python scripts and SQL queries to VBA macros automating Excel reports. My journey in data science began with a fascination for uncovering patterns in complex datasets. </p>
              </div>
            </div>

            {/* Timeline connector line */}
            <div className="hidden md:block w-0.5 h-16 bg-primary/30 mx-auto" />

            {/* Timeline Item 4 - Image Right */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 md:order-1">
                <h3 className="text-2xl font-semibold text-primary">Started my Journey with MIDS program</h3>
                <p className="text-foreground/90 leading-relaxed">My curiosity about data quickly turned into a passion for leveraging it to solve real-world problems. Currently pursuing a MIDS degree at UC Berkeley, I focus on advanced statistical methods, machine learning algorithms, and modern data engineering practices. My coursework includes deep learning, natural language processing, and big data technologies. Through various projects in machine learning pipelines, data visualization dashboards, and NLP applications, I've developed expertise in transforming complex data into actionable insights that drive decision-making.</p>
              </div>
              <div className="relative md:order-2">
                <div className="absolute -left-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
                <Card className="p-6 bg-card border-border overflow-hidden">
                  <img alt="Internship experience" className="w-full h-64 object-cover rounded-lg" src="/lovable-uploads/6fc55fb9-6dbf-4bb7-9459-c0e6c9c27089.jpg" />
                </Card>
              </div>
            </div>

            {/* Timeline connector line */}
            <div className="hidden md:block w-0.5 h-16 bg-primary/30 mx-auto" />

            {/* Timeline Item 5 - Image Left */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background hidden md:block z-10" />
                <Card className="p-6 bg-card border-border overflow-hidden">
                  <img alt="Future goals" className="w-full h-64 object-cover rounded-lg" src="/lovable-uploads/a1afefb7-6fe6-45c7-8c44-7053d6c2434e.jpg" />
                </Card>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Future Goals</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Looking ahead, I aim to bridge the gap between data science and engineering, 
                  building scalable systems that turn insights into action. I'm passionate about 
                  leveraging AI and machine learning to solve complex problems and create meaningful 
                  impact in the tech industry.
                </p>
              </div>
            </div>
          </div>

          {/* Beyond Data Section - At Bottom */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-center mb-8">Beyond Data</h2>
            <Card className="p-8 bg-card border-border">
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary shrink-0">
                    <ChefHat className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Cooking Enthusiast</h3>
                    <p className="text-foreground/90 leading-relaxed">
                      When I'm not analyzing data or training models, you'll find me in the kitchen experimenting with new recipes and flavors. I enjoy exploring international cuisines! From understanding the Maillard reaction to perfecting fermentation processes, cooking provides a delicious intersection of art and science that keeps me engaged outside of my professional work.  
                    </p>
                    
                  </div>
                </div>
                
                {/* Food Photo Grid - 3x2 on lg, 2x3 on md, 1x6 on sm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img alt="Dish 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/8611e992-b978-44f8-aa44-1123eba4d38a.jpg" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img alt="Dish 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/091789ce-da31-44ab-8d88-a9adee75511a.jpg" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src="/lovable-uploads/placeholder.svg" alt="Dish 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src="/lovable-uploads/placeholder.svg" alt="Dish 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src="/lovable-uploads/placeholder.svg" alt="Dish 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src="/lovable-uploads/placeholder.svg" alt="Dish 6" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src="/lovable-uploads/placeholder.svg" alt="Dish 7" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src="/lovable-uploads/placeholder.svg" alt="Dish 8" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src="/lovable-uploads/placeholder.svg" alt="Dish 9" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src="/lovable-uploads/placeholder.svg" alt="Dish 10" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src="/lovable-uploads/placeholder.svg" alt="Dish 11" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src="/lovable-uploads/placeholder.svg" alt="Dish 12" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default About;