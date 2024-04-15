import { Repository } from "@/interfaces/github";
import { GitHubDB } from "./database/github";
import { api } from "./api";

export const getRepositories = async (): Promise<Repository[]> => {
  const data = await Promise.all(
    GitHubDB.map(async (project) => {
      const response = await api(project.slug);
      return {
        id: response.id,
        name: project.name,
        description: response.description,
        html_url: response.html_url,
        watchers: response.watchers,
        forks: response.forks,
      };
    })
  );

  return data;
};
