
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-slate-400/20 to-gray-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-400/20 to-slate-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-slate-900 bg-clip-text text-transparent leading-tight">
            Hi, I'm Himanshu
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-gray-600 dark:text-muted-foreground/80 mb-12 max-w-3xl mx-auto">
            I craft beautiful, functional web experiences with modern technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.open('https://github.com/himanshu98010', '_blank')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-slate-800 hover:to-gray-900 text-white border-0 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
                  className="border-2 border-slate-300 text-slate-700 dark:border-border dark:text-foreground px-8 py-3 text-lg hover:bg-slate-50 dark:hover:bg-accent/50 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/himanshu98010', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
