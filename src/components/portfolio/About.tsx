import { Code, Brain, Rocket, Target } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Data Science Enthusiast",
    description: "Passionate about extracting insights from data and building ML models",
  },
  {
    icon: Code,
    title: "Full-Stack Developer",
    description: "Building web applications with modern technologies",
  },
  {
    icon: Rocket,
    title: "Quick Learner",
    description: "Always exploring new technologies and frameworks",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focused on becoming a professional Data Scientist",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-mono text-sm">{"// About Me"}</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Know <span className="text-gradient">Who I Am</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="glass rounded-xl p-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello! I'm <span className="text-primary font-semibold">Patel Krish</span>,
                a passionate B.E. student currently in my 4th semester at{" "}
                <span className="text-accent">UPL University of Sustainable Technology</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity about how things work, and now I'm
                deeply invested in the world of <span className="text-primary">Data Science</span> and{" "}
                <span className="text-accent">Machine Learning</span>. I believe data has the power
                to transform businesses and solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new algorithms, contributing to
                open-source projects, or mentoring fellow students as an{" "}
                <span className="text-primary">Algozenith Campus Ambassador</span>.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">10+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">7+</div>
                  <div className="text-xs text-muted-foreground">Certificates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">12+</div>
                  <div className="text-xs text-muted-foreground">Technologies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass glass-hover rounded-xl p-6 text-center group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

