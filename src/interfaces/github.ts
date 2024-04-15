export interface GitHub {
  id: string;
  name: string;
  slug: string;
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  watchers: number;
  forks: number;
}
