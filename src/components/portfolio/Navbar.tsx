import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Career", href: "#career" },
  { name: "Tools", href: "#tools" },
  { name: "Languages", href: "#languages" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkHref = (href: string) => {
    if (isHome) return href;
    return `/${href}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/20 group-hover:border-primary/50 transition-all duration-300">
            <img
              src="/uploads/profile/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold text-foreground">
            Krish<span className="text-primary">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={getLinkHref(link.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Hire Me Button */}
        <div className="hidden lg:block">
          <Link to="/hire-me">
            <Button className="border-gradient bg-transparent hover:bg-primary/10 text-primary font-medium">
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-lg p-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={getLinkHref(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link to="/hire-me" onClick={() => setIsOpen(false)}>
              <Button className="w-full border-gradient bg-transparent hover:bg-primary/10 text-primary">
                Hire Me
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
