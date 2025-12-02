import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const Contact = () => {
  const scrollProgress = useScrollProgress();
  
  // Calculate opacities based on scroll progress
  const imageOpacity = Math.max(0, 1 - scrollProgress * 2);
  const contentOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.3) * 2));
  
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourprofile",
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Your City, Country",
      href: null,
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
              <Mail className="w-24 h-24 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">Contact</h1>
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
            <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">
              I'm always interested in new opportunities, collaborations, and interesting conversations
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <div className="container mx-auto max-w-4xl space-y-12 px-4 py-16">

        <Card className="p-8 md:p-12 bg-card border-border">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold">Let's Connect</h2>
              <p className="text-muted-foreground">
                Whether you have a question, want to collaborate on a project, or just want to say hi, 
                feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method) => (
                <div 
                  key={method.label}
                  className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      {method.href ? (
                        <a 
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-mono text-sm hover:text-primary transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="font-mono text-sm">{method.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Resume Download Box */}
              <div className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary transition-colors group">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <FileDown className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Resume</p>
                      <p className="font-mono text-sm">Download my CV/Resume</p>
                    </div>
                  </div>
                  <a href="/resume.pdf" download>
                    <Button 
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <FileDown className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <a href="mailto:your.email@example.com">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
