import { useState } from "react";
import { Award, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "AWS Certificate",
    issuer: "AWS",
    date: "2024",
    icon: "☁️",
    imagePath: "/uploads/certificates/AWS Ccertificate.pdf",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "AWS Chat Implementation",
    issuer: "AWS",
    date: "2024",
    icon: "💬",
    imagePath: "/uploads/certificates/AWS implementing chat in connect.pdf",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Project KrishiX",
    issuer: "Ideakode Hackathon",
    date: "2024",
    icon: "🌱",
    imagePath: "/uploads/certificates/IDEAKODE - Team KrishiX.pdf",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Python Programming",
    issuer: "Course Completion",
    date: "2024",
    icon: "🐍",
    imagePath: "/uploads/certificates/Krish_Python_Certificate.pdf",
    color: "from-blue-400 to-yellow-300",
  },
  {
    title: "Technocart Hackathon",
    issuer: "Technocart",
    date: "2024",
    icon: "🏆",
    imagePath: "/uploads/certificates/Technocart_heckathon_certificate.pdf",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Job Ready Data Science",
    issuer: "Data Science Course",
    date: "2024",
    icon: "📊",
    imagePath: "/uploads/certificates/The_Ultimate_Job_Ready_Data_Science_Course_Certificate (1).pdf",
    color: "from-indigo-500 to-purple-500",
  },
];

export function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  const visibleCount = 4;
  const maxIndex = Math.max(0, certificates.length - visibleCount);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-mono text-sm">{"// Credentials"}</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Verified <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={cert.title}
              className="group relative rounded-xl overflow-hidden cursor-pointer bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Card Main Content */}
              <div className="aspect-[4/3] relative w-full bg-secondary/20 group-hover:bg-secondary/30 transition-colors duration-500">
                {/* Document Preview */}
                <div className="absolute inset-0 p-4 flex items-center justify-center">
                  {cert.imagePath.endsWith('.pdf') ? (
                    <iframe
                      src={`${cert.imagePath}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      className="w-full h-full border-0 pointer-events-none shadow-sm rounded-sm bg-white"
                      title={cert.title}
                      scrolling="no"
                    />
                  ) : (
                    <img
                      src={cert.imagePath}
                      alt={cert.title}
                      className="w-full h-full object-contain pointer-events-none shadow-sm rounded-sm"
                    />
                  )}
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-4 bg-card/95 backdrop-blur-sm border-t border-white/5 space-y-1 z-20 relative">
                <h3 className="font-bold text-base text-foreground line-clamp-1" title={cert.title}>
                  {cert.title}
                </h3>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span className="text-primary font-medium">{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Screen
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { label: "Certificates", value: "6+" },
            { label: "Courses Completed", value: "10+" },
            { label: "Learning Hours", value: "300+" },
            { label: "Skills Verified", value: "15+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="glass rounded-2xl p-4 md:p-8 max-w-4xl w-full h-[80vh] flex flex-col relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-background/50 hover:bg-background"
              onClick={() => setSelectedCert(null)}
            >
              <X className="w-5 h-5" />
            </Button>

            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selectedCert.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {selectedCert.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{selectedCert.title}</h3>
                  <p className="text-primary text-sm">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
              </div>

              {/* PDF Viewer / Image Display */}
              <div className="flex-1 bg-white/5 rounded-lg overflow-hidden relative border border-white/10">
                {selectedCert.imagePath.endsWith('.pdf') ? (
                  <iframe
                    src={selectedCert.imagePath}
                    className="w-full h-full"
                    title={selectedCert.title}
                  />
                ) : (
                  <img
                    src={selectedCert.imagePath}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
