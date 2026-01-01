import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const education = [
  {
    title: "B.E. in Computer Science",
    institution: "UPL University of Sustainable Technology",
    period: "2026 - Present",
    description: "Currently in Semester 4, focusing on Data Science and Machine Learning",
    location: "Gujarat, India",
    current: true,
  },
  {
    title: "Higher Secondary (11th & 12th)",
    institution: "Pramukhswami Vidyalay Sarangpur",
    period: "2023 - 2024",
    description: "Science stream with focus on Mathematics and Computer Science",
    location: "Sarangpur, Gujarat",
    current: false,
  },
];

const experience = [
  {
    title: "Campus Ambassador",
    company: "Algozenith",
    period: "2026 - Present",
    description: "Promoting coding culture, organizing workshops, and helping students with DSA and competitive programming",
    location: "Remote",
    current: true,
  },
];

export function Career() {
  return (
    <section id="career" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-mono text-sm">{"// My Journey"}</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Career <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-bounce-slow">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />

              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-16 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 w-5 h-5 rounded-full border-2 transition-all duration-300 z-10 ${item.current
                    ? "bg-primary border-primary shadow-[0_0_15px_hsl(var(--primary))] scale-110"
                    : "bg-background border-muted-foreground group-hover:border-primary group-hover:scale-110 group-hover:bg-primary"
                    }`} />

                  {/* Connecting Line Enhancement on Hover */}
                  <div className="absolute left-[25px] top-6 w-8 h-[2px] bg-primary/20 group-hover:bg-primary transition-all duration-300" />

                  <div className={`glass glass-hover rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${item.current ? "border-primary/50 shadow-[0_0_30px_-10px_hsl(var(--primary)/0.2)]" : "border-border/50"
                    }`}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      {item.current && (
                        <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full animate-pulse border border-primary/20">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium mb-3">{item.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5 bg-secondary/50 px-2 py-1 rounded-md">
                        <Calendar className="w-4 h-4 text-primary" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-secondary/50 px-2 py-1 rounded-md">
                        <MapPin className="w-4 h-4 text-primary" />
                        {item.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center animate-bounce-slow" style={{ animationDelay: "1s" }}>
                <Briefcase className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-transparent" />

              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-16 group animate-fade-in-up"
                  style={{ animationDelay: `${(index + education.length) * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 w-5 h-5 rounded-full border-2 transition-all duration-300 z-10 ${item.current
                    ? "bg-accent border-accent shadow-[0_0_15px_hsl(var(--accent))] scale-110"
                    : "bg-background border-muted-foreground group-hover:border-accent group-hover:scale-110 group-hover:bg-accent"
                    }`} />

                  {/* Connecting Line Enhancement on Hover */}
                  <div className="absolute left-[25px] top-6 w-8 h-[2px] bg-accent/20 group-hover:bg-accent transition-all duration-300" />

                  <div className={`glass glass-hover rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${item.current ? "border-accent/50 shadow-[0_0_30px_-10px_hsl(var(--accent)/0.2)]" : "border-border/50"
                    }`}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      {item.current && (
                        <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full animate-pulse border border-accent/20">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-accent font-medium mb-3">{item.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5 bg-secondary/50 px-2 py-1 rounded-md">
                        <Calendar className="w-4 h-4 text-accent" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-secondary/50 px-2 py-1 rounded-md">
                        <MapPin className="w-4 h-4 text-accent" />
                        {item.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}

              {/* More to come card */}
              <div className="relative pl-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <div className="absolute left-4 w-5 h-5 rounded-full border-2 border-primary/50 bg-background shadow-[0_0_10px_hsl(var(--primary)/0.2)] animate-pulse" />
                <div className="glass rounded-xl p-6 border-dashed border-muted-foreground/30 hover:border-muted-foreground/60 transition-colors">
                  <p className="text-muted-foreground text-center font-mono text-sm flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    More achievements loading...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
