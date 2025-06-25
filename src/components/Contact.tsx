import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500  bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-slate-50/50 to-gray-50/50 dark:from-slate-950/20 dark:to-gray-950/20 border-border/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-foreground">
                  Let's Connect!
                </h3>
                <p className="text-gray-600 dark:text-muted-foreground text-lg max-w-2xl mx-auto">
                  Whether you have a project in mind, want to collaborate, or
                  just want to say hello, I'd love to hear from you. Drop me a
                  message and let's create something amazing together!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=himanshusuthars810@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition">
                    Send Email
                  </button>
                </a>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 text-slate-700 dark:border-border dark:text-foreground px-8 py-3 text-lg hover:bg-slate-50 dark:hover:bg-accent/50 transition-all duration-300 hover:scale-105"
                  onClick={() =>
                    window.open("https://github.com/himanshu98010", "_blank")
                  }
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub Profile
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-foreground">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-muted-foreground">
                    himanshusuthars810@gmail.com
                  </p>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-foreground">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-muted-foreground">
                    India
                  </p>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-2 text-gray-800 dark:text-foreground">
                    Response Time
                  </h4>
                  <p className="text-gray-600 dark:text-muted-foreground">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
