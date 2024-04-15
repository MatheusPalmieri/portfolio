export interface Project {
  id: string;
  name: string;
  about: string;
  links: {
    github: string;
    demo: string;
  };
  technologies: TechnologiesEnum[];
  image: string;
}

export enum TechnologiesEnum {
  REACT = "React",
  NEXT = "Next",
  VUE = "Vue",
  TYPESCRIPT = "TypeScript",
  JAVASCRIPT = "JavaScript",
  PHP = "PHP",
  NODE = "Node",
  POSTGRESQL = "PostgreSQL",
  MYSQL = "MySQL",
  PRISMA = "Prisma",
  LARAVEL = "Laravel",
  EXPRESS = "Express",
  MONGODB = "MongoDB",
  HTML = "HTML",
  CSS = "CSS",
  TAILWIND = "Tailwind",
  STYLED_COMPONENTS = "Styled Components",
  BOOTSTRAP = "Bootstrap",
}
