const languages = [
  { name: "Python", level: 90, category: "Programming", id: "python" },
  { name: "JavaScript", level: 80, category: "Web", id: "js" },
  { name: "HTML", level: 95, category: "Web", id: "html" },
  { name: "CSS", level: 85, category: "Web", id: "css" },
  { name: "C", level: 75, category: "Programming", id: "c" },
  { name: "C++", level: 70, category: "Programming", id: "cpp" },
  { name: "Core Java", level: 65, category: "Programming", id: "java" },
  { name: "Flask", level: 80, category: "Framework", id: "flask" },
  { name: "SQL", level: 85, category: "Database", id: "mysql" },
  { name: "MongoDB", level: 75, category: "Database", id: "mongodb" },
  { name: "Postman", level: 90, category: "Tools", id: "postman" },
];

const categories = [
  { name: "Programming", color: "from-blue-500 to-cyan-500" },
  { name: "Web", color: "from-orange-500 to-yellow-500" },
  { name: "Framework", color: "from-green-500 to-emerald-500" },
  { name: "Database", color: "from-purple-500 to-pink-500" },
  { name: "Tools", color: "from-red-500 to-orange-500" },
];

export function Languages() {
  return (
    <section id="languages" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-mono text-sm">{"// Skills"}</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Languages & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <div key={cat.name} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`} />
              <span className="text-sm text-muted-foreground">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-10 space-y-8">
          {/* Row 1: Scroll Left */}
          <div className="flex w-max gap-6 animate-scroll hover:[animation-play-state:paused] px-4">
            {[...languages.slice(0, Math.ceil(languages.length / 2)), ...languages.slice(0, Math.ceil(languages.length / 2))].map((lang, index) => {
              const category = categories.find((c) => c.name === lang.category);
              return (
                <div
                  key={`row1-${lang.name}-${index}`}
                  className="w-[300px] glass glass-hover rounded-xl p-6 group flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={`https://skillicons.dev/icons?i=${lang.id}&theme=dark`}
                        alt={lang.name}
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {lang.name}
                      </h3>
                      <span className="text-xs text-muted-foreground">{lang.category}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{lang.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${category?.color || "from-primary to-accent"} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2: Scroll Right (Reverse) */}
          <div className="flex w-max gap-6 animate-scroll-reverse hover:[animation-play-state:paused] px-4">
            {[...languages.slice(Math.ceil(languages.length / 2)), ...languages.slice(Math.ceil(languages.length / 2))].map((lang, index) => {
              const category = categories.find((c) => c.name === lang.category);
              return (
                <div
                  key={`row2-${lang.name}-${index}`}
                  className="w-[300px] glass glass-hover rounded-xl p-6 group flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={`https://skillicons.dev/icons?i=${lang.id}&theme=dark`}
                        alt={lang.name}
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {lang.name}
                      </h3>
                      <span className="text-xs text-muted-foreground">{lang.category}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{lang.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${category?.color || "from-primary to-accent"} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-6 max-w-xl mx-auto">
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-primary">{">"}</span> I write code that works...
              <span className="text-accent"> most of the time</span> 😄
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
