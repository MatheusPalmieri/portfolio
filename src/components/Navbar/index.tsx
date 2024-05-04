import { useMobile } from "@/hooks/mobile";
import { NavbarLink } from "./Link";
import { Zap } from "lucide-react";
import { Container } from "../Container";

export const Navbar = () => {
  const isMobile = useMobile();

  return (
    <div className="w-[100dvw] fixed z-50 py-6">
      <Container>
        <nav
          className="
        h-16 p-3 bg-[rgba(100,100,100,0.1)] backdrop-filter backdrop-blur-xl rounded-lg
        flex items-center justify-between
      "
        >
          <a
            href="#home"
            className="text-2xl font-medium cursor-pointer flex items-center gap-3"
          >
            <Zap strokeWidth={2.5} /> {!isMobile && "Matheus Palmieri"}
          </a>

          <ul className="flex gap-3">
            <NavbarLink route="/">Home</NavbarLink>
            <NavbarLink route="/about">About me</NavbarLink>
            <NavbarLink route="/skills">Skills</NavbarLink>
            <NavbarLink route="/projects">Projects</NavbarLink>
          </ul>
        </nav>
      </Container>
    </div>
  );
};
