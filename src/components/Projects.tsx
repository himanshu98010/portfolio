import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import weatherImg from "../assets/weather.png";
import trackerImg from "../assets/tracker.png";
import animateImg from "../assets/animated.png";
import BackendImg from "../assets/Backend.png";

const Projects = () => {
  const projects = [
    {
      title: "Currency Tracker",
      description: "A crypto currency tracker and convertor.",
      image: trackerImg,
      technologies: ["React", "Node.js", "Tailwind CSS"],
      github: "https://github.com/himanshu98010/crypto-currency-tracker",
      demo: "https://crypto-tracker-himanshu.vercel.app/",
      featured: true,
    },
    {
      title: "Backend of a course selling app",
      description:
        "Backend using MongoDb with Authentication using JWT's and CRUD operations",
      image: BackendImg,
      technologies: ["React", "MongoDb", "JWT"],
      github: "https://github.com/himanshu98010/Backend-project",
      demo: "https://github.com/himanshu98010/Backend-project",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather application with forecasts, location search, and interactive maps.",
      image: weatherImg,
      technologies: ["React", "OpenWeather API", "Chart.js"],
      github: "https://github.com/himanshu98010/weather_app",
      demo: "https://himanshu-weather-app12.netlify.app/",
    },
    {
      title: "Animated Portfolio Website",
      description:
        "A responsive and Animated portfolio website with dark mode, Smooth animations, and contact form.",
      image: animateImg,
      technologies: ["React", "Gsap", "Tailwind CSS"],
      github: "https://github.com/himanshu98010/batman-portfolio",
      demo: "https://himanshusuthar1.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-slate-900 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-800 dark:text-foreground">
                    {project.title}
                  </span>
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-slate-600 to-gray-700 text-white">
                      Featured
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, "_blank")}
                    className="flex-1 border-slate-300 text-slate-700 dark:border-border dark:text-foreground hover:bg-slate-50 dark:hover:bg-accent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => window.open(project.demo, "_blank")}
                    className="flex-1 bg-gradient-to-r from-slate-700 to-gray-800 hover:from-slate-800 hover:to-gray-900 text-white"
                  >
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
