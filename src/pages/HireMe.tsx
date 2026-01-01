
import { useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Briefcase, Zap, CheckCircle, ArrowRight, Code, Database, Globe, Smartphone, PenTool } from "lucide-react";

const services = [
    { icon: Globe, label: "Full-Stack Development" },
    { icon: Code, label: "Frontend Development" },
    { icon: Smartphone, label: "Mobile App Development" },
    { icon: PenTool, label: "UI/UX Design" },
    { icon: Database, label: "Data Science & AI Solutions" },
];

const offerings = [
    { label: "Clean, Modern Code" },
    { label: "Responsive Design" },
    { label: "Fast Turnaround" },
    { label: "Regular Updates" },
    { label: "Data-Driven Insights" },
    { label: "Scalable Architecture" },
];

const HireMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        projectType: "",
        details: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/krishpatel3213@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company || "Not specified",
                    project_type: formData.projectType,
                    message: formData.details,
                    _subject: "New Hire Me Inquiry from Portfolio"
                })
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: "", email: "", company: "", projectType: "", details: "" });
                // Reset success message after 5 seconds
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                alert("Something went wrong. Please try again or email directly.");
            }
        } catch (error) {
            alert("Error sending message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, projectType: value }));
    };

    return (
        <div className="bg-background min-h-screen relative overflow-hidden">
            <ParticleBackground />
            <Navbar />

            {/* Top Gradient Line from Reference */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-purple-500 z-50" />

            <main className="relative z-10 pt-32 pb-24 container mx-auto px-4">
                <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Let's Work <span className="text-gradient">Together</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how I can help bring your ideas to life with code and data.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Left Column: Info */}
                    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        {/* Hire Me For Card */}
                        <div className="glass p-8 rounded-2xl border border-primary/20">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                                <Briefcase className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Hire Me For</h3>
                            <div className="space-y-4">
                                {services.map((service, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                                        <ArrowRight className="w-4 h-4 text-primary" />
                                        <span>{service.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* What I Offer Card */}
                        <div className="glass p-8 rounded-2xl border border-accent/20">
                            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">What I Offer</h3>
                            <div className="space-y-4">
                                {offerings.map((offer, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                                        <ArrowRight className="w-4 h-4 text-accent" />
                                        <span>{offer.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="glass p-8 rounded-2xl border border-white/5 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                        {isSuccess ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle className="w-8 h-8 text-primary animate-bounce" />
                                </div>
                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you at {formData.email} soon.</p>
                                <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-6">
                                    Send Another
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Full Name *</label>
                                    <Input
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="bg-secondary/50 border-white/10 focus:border-primary/50 h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email Address *</label>
                                    <Input
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="bg-secondary/50 border-white/10 focus:border-primary/50 h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Company / Organization</label>
                                    <Input
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company"
                                        className="bg-secondary/50 border-white/10 focus:border-primary/50 h-12"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Project Type *</label>
                                    <Select onValueChange={handleSelectChange} required>
                                        <SelectTrigger className="bg-secondary/50 border-white/10 focus:border-primary/50 h-12">
                                            <SelectValue placeholder="Select Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="web-dev">Web Development</SelectItem>
                                            <SelectItem value="data-science">Data Science & AI</SelectItem>
                                            <SelectItem value="mobile-app">Mobile App</SelectItem>
                                            <SelectItem value="consulting">Consulting</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Project Details *</label>
                                    <Textarea
                                        name="details"
                                        required
                                        value={formData.details}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                                        className="bg-secondary/50 border-white/10 focus:border-primary/50 min-h-[150px] resize-none p-4"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-primary-foreground h-12 text-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default HireMe;
