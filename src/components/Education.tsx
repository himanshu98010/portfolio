
import { Card, CardContent } from "@/components/ui/card";
import { Description } from "@radix-ui/react-toast";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Mumbai University",
      year: "2023 - 2027",
      description: " ~ Currently Pursuing. Focused on software engineering, data structures, and web development.",
      gpa: "8/10"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Lokmanya Junior College ",
      year: "2021 - 2023",
      description: "Mathematics, Physics, Chemistry. Strong foundation in Computer Science.",
      gpa: "70%"
    },
    {
      degree : "Self Learnings",
      description:"A self learner passionate to dive deep in the world of tech . Exploring new technologies and Working on projects daily",
      year:"2023 - present"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-slate-900 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
            My academic journey and foundation in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-500 to-gray-600"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full border-4 border-background"></div>
                
                <div className="ml-20">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-foreground">{edu.degree}</h3>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-gray-600 dark:text-muted-foreground mb-2">{edu.institution}</p>
                      <p className="text-gray-600 dark:text-muted-foreground mb-3">{edu.description}</p>
                     {edu.gpa && <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-foreground">Grade:</span>
                        <span className="text-sm text-green-600 dark:text-green-400 font-semibold">{edu.gpa}</span>
                      </div>}
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

export default Education;
