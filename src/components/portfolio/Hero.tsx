import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const codeLines = [
  'const developer = new DataScientist("Krish");',
  'print("Hello, World! 🌍")',
  'SELECT * FROM skills WHERE passion = true;',
  'def create_future(): return "success"',
  'git commit -m "Building dreams"',
  'npm run build-career --success',
];

export function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < codeLines[currentLine].length) {
        timeout = setTimeout(() => {
          setDisplayText(codeLines[currentLine].slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, 50);
      } else {
        setCurrentLine((prev) => (prev + 1) % codeLines.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentLine]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider animate-fade-in-up">
                {"<Hello World />"}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                I'm{" "}
                <span className="text-gradient glow-text">Patel Krish</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Aspiring <span className="text-primary">Data Scientist</span> &{" "}
                <span className="text-accent">Developer</span>
              </h2>
            </div>

            {/* Typing Animation */}
            <div className="glass rounded-lg p-4 font-mono text-sm md:text-base">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary">{">"}</span>{" "}
                <span className="text-foreground">{displayText}</span>
                <span className="typing-cursor" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
                >
                  Let's Work Together
                </Button>
              </a>
              <a href="#projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  View Projects
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:krishpatel3213@gmail.com"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse-glow" />

              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-primary/50 p-1 animate-float overflow-hidden glass">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden relative">
                  {/* Actual Image Tag - User puts 'profile.png' in public/uploads/profile/ */}
                  <img
                    src="/uploads/profile/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover relative z-10"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallbackCtx = parent.querySelector('.fallback-content');
                        if (fallbackCtx) (fallbackCtx as HTMLElement).style.display = 'block';
                      }
                    }}
                  />

                  {/* Fallback Content (shows if image fails) */}
                  <div className="fallback-content absolute inset-0 hidden">
                    <div className="flex flex-col items-center justify-center h-full text-center p-6">
                      <User className="w-24 h-24 text-muted-foreground mb-4" />
                      <p className="text-sm text-muted-foreground font-mono bg-background/50 px-3 py-1 rounded-full">
                        Add profile.png to uploads/profile
                      </p>
                    </div>
                  </div>

                  {/* Initial State (shows if we want to default to placeholder until load, but simpler to just try load) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -z-0">
                    <User className="w-24 h-24 text-muted-foreground/20" />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass rounded-lg px-3 py-2 animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-xs font-mono text-primary">Python 🐍</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-lg px-3 py-2 animate-float" style={{ animationDelay: "2s" }}>
                <span className="text-xs font-mono text-accent">Data Science 📊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
