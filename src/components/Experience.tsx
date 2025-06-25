
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Company",
      duration: "2024 - Present",
      description: "Developing modern web applications using React, Node.js, and cloud technologies. Leading frontend architecture decisions and mentoring junior developers.",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
      achievements: [
        "Improved application performance by 40%",
        "Led team of 3 developers",
        "Implemented CI/CD pipeline"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Startup Inc",
      duration: "2023 - 2024",
      description: "Built responsive web interfaces and collaborated with designers to create user-friendly experiences. Worked on multiple client projects.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Git"],
      achievements: [
        "Delivered 5+ client projects",
        "Reduced load time by 30%",
        "Implemented responsive design"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-slate-900 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 to-slate-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-gray-600 to-slate-500 rounded-full border-4 border-background"></div>
                
                <div className="ml-20">
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-foreground mb-1">{exp.title}</h3>
                          <p className="text-lg font-medium text-slate-600 dark:text-slate-300">{exp.company}</p>
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800/50 px-3 py-1 rounded-full">
                          {exp.duration}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-muted-foreground mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-foreground mb-2">Key Achievements:</h4>
                        <ul className="text-sm text-gray-600 dark:text-muted-foreground space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
