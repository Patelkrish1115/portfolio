import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Data Science", "Web Dev", "Python", "Machine Learning"];

const projects = [
  {
    title: "Stock Price Predictor",
    description: "ML model to predict stock prices using LSTM neural networks with historical data analysis",
    category: "Machine Learning",
    tags: ["Python", "TensorFlow", "Pandas"],
    image: "📈",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Full-stack web application for managing online store with analytics and inventory",
    category: "Web Dev",
    tags: ["React", "Flask", "MongoDB"],
    image: "🛒",
  },
  {
    title: "Sentiment Analyzer",
    description: "NLP-based sentiment analysis tool for social media posts and reviews",
    category: "Data Science",
    tags: ["Python", "NLTK", "Scikit-learn"],
    image: "😊",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather application with 7-day forecast and location-based alerts",
    category: "Web Dev",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    image: "🌤️",
  },
  {
    title: "COVID-19 Data Visualization",
    description: "Interactive dashboard visualizing COVID-19 statistics with charts and maps",
    category: "Data Science",
    tags: ["Python", "Plotly", "Pandas"],
    image: "📊",
  },
  {
    title: "Chatbot Assistant",
    description: "AI-powered chatbot for customer support with natural language understanding",
    category: "Machine Learning",
    tags: ["Python", "NLP", "Flask"],
    image: "🤖",
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with animations and dark theme",
    category: "Web Dev",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "💼",
  },
  {
    title: "Image Classifier",
    description: "Deep learning model to classify images using CNN architecture",
    category: "Machine Learning",
    tags: ["Python", "PyTorch", "OpenCV"],
    image: "🖼️",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-mono text-sm">{"// My Work"}</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === category
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                : "glass text-muted-foreground hover:text-primary hover:border-primary/50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass glass-hover rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border border-white/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-secondary/50 via-secondary/30 to-background flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="drop-shadow-2xl filter transform group-hover:rotate-12 transition-transform duration-300">{project.image}</span>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <div className="p-2 rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed h-11">
                  {project.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary border border-white/5 text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
