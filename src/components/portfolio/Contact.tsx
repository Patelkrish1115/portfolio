import { Mail, Github, Linkedin, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    name: "Email",
    value: "krishpatel3213@gmail.com",
    href: "mailto:krishpatel3213@gmail.com",
    icon: Mail,
    color: "from-red-500 to-orange-500",
  },
  {
    name: "GitHub",
    value: "github.com/patelkrish",
    href: "https://github.com",
    icon: Github,
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/patelkrish",
    href: "https://linkedin.com",
    icon: Linkedin,
    color: "from-blue-500 to-blue-700",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-mono text-sm">{"// Get In Touch"}</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Let's Build <span className="text-gradient">Something Amazing</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-6 text-center group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <link.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {link.name}
              </h3>
              <p className="text-sm text-muted-foreground break-all">{link.value}</p>
              <ArrowUpRight className="w-4 h-4 mx-auto mt-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* Location & Availability */}
        <div className="glass rounded-xl p-8 max-w-2xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Gujarat, India</span>
            </div>
            <div className="h-4 w-px bg-border hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="mailto:krishpatel3213@gmail.com">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Me a Message
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
