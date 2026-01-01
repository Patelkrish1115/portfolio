import {
  Terminal,
  Cpu
} from "lucide-react";

// Using https://skillicons.dev for real logos
const tools = [
  { name: "VS Code", id: "vscode" },
  { name: "Postman", id: "postman" },
  { name: "Git", id: "git" },
  { name: "GitHub", id: "github" },
  { name: "Jupyter", id: "python" },
  { name: "Pandas", id: "pandas", customImage: "/uploads/icons/pandas.png" },
  { name: "NumPy", id: "numpy", customImage: "/uploads/icons/numpy.png" },
  { name: "TensorFlow", id: "tensorflow" },
  { name: "PyTorch", id: "pytorch" },
  { name: "Docker", id: "docker" },
  { name: "MySQL", id: "mysql" },
  { name: "MongoDB", id: "mongodb" },
  { name: "Figma", id: "figma" },
  { name: "Linux", id: "linux" },
  { name: "React", id: "react" },
];

export function Tools() {
  return (
    <section id="tools" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-mono text-sm">{"// Tech Arsenal"}</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Tools I <span className="text-gradient">Use</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These are the tools and technologies I use daily to bring ideas to life
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-10 space-y-8">
          {/* Row 1: Scroll Left */}
          <div className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused] px-4">
            {[...tools.slice(0, Math.ceil(tools.length / 2)), ...tools.slice(0, Math.ceil(tools.length / 2))].map((tool, index) => (
              <div
                key={`row1-${tool.name}-${index}`}
                className="w-[180px] glass glass-hover rounded-xl p-6 text-center group cursor-pointer flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-xl bg-secondary/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 p-3">
                  <img
                    src={(tool as any).customImage || `https://skillicons.dev/icons?i=${tool.id}&theme=dark`}
                    alt={tool.name}
                    className="w-full h-full object-contain filter drop-shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Row 2: Scroll Right (Reverse) */}
          <div className="flex w-max gap-8 animate-scroll-reverse hover:[animation-play-state:paused] px-4">
            {[...tools.slice(Math.ceil(tools.length / 2)), ...tools.slice(Math.ceil(tools.length / 2))].map((tool, index) => (
              <div
                key={`row2-${tool.name}-${index}`}
                className="w-[180px] glass glass-hover rounded-xl p-6 text-center group cursor-pointer flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-xl bg-secondary/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 p-3">
                  <img
                    src={(tool as any).customImage || `https://skillicons.dev/icons?i=${tool.id}&theme=dark`}
                    alt={tool.name}
                    className="w-full h-full object-contain filter drop-shadow-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Extra info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            {"// Always learning new tools and technologies"}
          </p>
        </div>
      </div>
    </section>
  );
}
