import { Container } from "@/components/Container";
import { Stack } from "@/components/Stack";
import { Button } from "@/components/ui/button";
import { GitFork, Link, Star } from "lucide-react";

export const Github = () => {
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

        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </div>
  );
};

const Card = () => (
  <div className="bg-zinc-900 flex flex-col gap-3 rounded-2xl p-6">
    <h5 className="text-4xl font-bold">GitBrabo</h5>
    <p className="text-xl text-zinc-300 font-medium">About</p>

    <div className="flex gap-3">
      <Button
        className="h-10 bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)] duration-300 rounded-full text-xl font-medium"
        onClick={() => window.open("https://github.com/MatheusPalmieri")}
      >
        <Link className="w-6 h-6 mr-2" />
        View Project
      </Button>

      <div className="flex items-center gap-1 text-zinc-400">
        <Star />

        <p className="text-xl font-medium">2</p>
      </div>

      <div className="flex items-center gap-1 text-zinc-400">
        <GitFork />

        <p className="text-xl font-medium">2</p>
      </div>
    </div>
  </div>
);
