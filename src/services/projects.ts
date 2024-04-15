import { Project } from "@/interfaces/projects";
import { ProjectsDB } from "./database/projects";

export const getProjects = (): Project[] => {
  return ProjectsDB;
};
