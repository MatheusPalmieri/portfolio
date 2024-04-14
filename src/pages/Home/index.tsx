import { Navbar } from "@/components/Navbar";
import { Github } from "@/sections/GitHub";
import { Header } from "@/sections/Home/Header";
import { Projects } from "@/sections/Projects";

export const Home = () => {
  return (
    <>
      <Navbar />

      <Header />
      {/* <Projects /> */}
      <Github />
    </>
  );
};
