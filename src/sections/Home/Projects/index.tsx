import { Container } from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/interfaces/projects";
import { getProjects } from "@/services/projects";
import { Code, Link } from "lucide-react";

export const Projects = () => {
  const projects = getProjects();

  return (
    <section id="projects">
      {projects.map((project: Project, idx: number) => {
        const isPair = idx % 2 === 0;

        return (
          <div
            key={project.id}
            className={isPair ? "transparent" : "bg-zinc-900"}
          >
            <Container className="py-6 max-w-[1024px]">
              <div
                className={`flex items-center gap-3 ${
                  isPair && "flex-row-reverse"
                }`}
              >
                <img
                  src={project.image}
                  alt="Project image"
                  className="w-72 h-96 object-cover rounded-lg"
                />

                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-base text-zinc-200 rounded-full"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-4xl font-bold">{project.name}</h3>

                  <p className="text-xl text-zinc-200">{project.about}</p>

                  <div className="flex gap-3">
                    <Button
                      className="h-10 bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)] duration-300 rounded-full text-xl font-medium"
                      onClick={() => window.open(project.links.demo)}
                    >
                      <Link className="w-6 h-6 mr-2" />
                      View Project
                    </Button>
                    <Button
                      className="h-10 bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)] duration-300 rounded-full text-xl font-medium"
                      onClick={() => window.open(project.links.github)}
                    >
                      <Code className="w-6 h-6 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        );
      })}
    </section>
  );
};
