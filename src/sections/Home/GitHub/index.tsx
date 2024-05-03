import { Container } from "@/components/Container";
import { Stack } from "@/components/Stack";
import { Button } from "@/components/ui/button";
import { Repository } from "@/interfaces/github";
import { getRepositories } from "@/services/github";
import { GitFork, Link, Star } from "lucide-react";
import { useLayoutEffect, useState } from "react";

export const Github = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useLayoutEffect(() => {
    const fetchRepositories = async () => {
      try {
        setIsLoading(true);
        const response = await getRepositories();
        setRepositories(response);
      } catch (error) {
        console.error("Error fetching data from GitHub", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div>
      <Container className="py-6 gap-3">
        <Stack className="items-center">
          <h4 className="text-5xl font-bold">Github</h4>

          <p className="text-xl text-zinc-300 font-medium">
            Check out my GitHub. There are lots of other cool projects there.
          </p>

          <Button
            className="w-fit h-10 bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)] duration-300 rounded-full text-xl font-medium"
            onClick={() => window.open("https://github.com/MatheusPalmieri")}
          >
            Go to my GitHub profile
          </Button>
        </Stack>

        <div className="h-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">
          {isLoading && (
            <div className="bg-zinc-900 flex flex-col gap-3 rounded-2xl p-6">
              <h5 className="text-4xl font-bold">Loading...</h5>
            </div>
          )}

          {!isLoading &&
            repositories &&
            repositories.length > 0 &&
            repositories.map((repository) => (
              <Card
                key={repository.id}
                name={repository.name}
                description={repository.description}
                url={repository.html_url}
                stars={repository.watchers}
                forks={repository.forks}
              />
            ))}
        </div>
      </Container>
    </div>
  );
};

interface CardProps {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
}

const Card = ({ name, description, url, stars, forks }: CardProps) => (
  <div className="bg-zinc-900 flex flex-col justify-between gap-3 rounded-2xl p-6">
    <h5 className="text-4xl font-bold">{name}</h5>
    <p className="text-xl text-zinc-300 font-medium">{description}</p>

    <div className="flex gap-3">
      <Button
        className="h-10 bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)] duration-300 rounded-full text-xl font-medium"
        onClick={() => window.open(url)}
      >
        <Link className="w-6 h-6 mr-2" />
        Repository
      </Button>

      <div className="flex items-center gap-1 text-zinc-400">
        <Star />

        <p className="text-xl font-medium">{stars}</p>
      </div>

      <div className="flex items-center gap-1 text-zinc-400">
        <GitFork />

        <p className="text-xl font-medium">{forks}</p>
      </div>
    </div>
  </div>
);
