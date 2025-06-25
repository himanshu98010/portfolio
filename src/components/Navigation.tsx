
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-lg">
      <div className="flex gap-2">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant={activeSection === section.id ? "default" : "ghost"}
            size="sm"
            onClick={() => scrollToSection(section.id)}
            className={`transition-all duration-300 ${
              activeSection === section.id
                ? "bg-gradient-to-r from-slate-600 to-gray-700 dark:from-blue-600 dark:to-purple-600 text-white"
                : "hover:bg-accent/50"
            }`}
          >
            {section.label}
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
