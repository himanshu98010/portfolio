import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/himanshu98010/ecommerce",
      demo: "https://demo-ecommerce.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/himanshu98010/task-manager",
      demo: "https://demo-tasks.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather application with forecasts, location search, and interactive maps.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      github: "https://github.com/himanshu98010/weather-app",
      demo: "https://demo-weather.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website with dark mode, animations, and contact form.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/himanshu98010/portfolio",
      demo: "https://himanshu-portfolio.com",
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
