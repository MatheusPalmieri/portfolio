const base_url = `${import.meta.env.VITE_GITHUB_URL}/repos/${
  import.meta.env.VITE_GITHUB_USERNAME
}`;

export const api = async (path: string) => {
  const response = await fetch(`${base_url}/${path}`);
  const data = await response.json();
  return data;
};
