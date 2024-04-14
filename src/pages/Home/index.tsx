import { Navbar } from "@/components/Navbar";
import { Github } from "@/sections/Home/GitHub";
import { Header } from "@/sections/Home/Header";
import { Projects } from "@/sections/Home/Projects";

export const Home = () => {
  return (
    <>
      <Navbar />

      <Header />
      <Projects />
      <Github />
    </>
  );
};
