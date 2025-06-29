
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p>&copy; 2025 Himanshu. Built with 🤍 , React & Tailwind CSS. </p>
      </footer>
    </div>
  );
};

export default Index;
