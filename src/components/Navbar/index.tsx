import { NavbarLink } from "./Link";
import { Zap } from "lucide-react";

export const Navbar = () => (
  <div className="w-full fixed z-50 p-6">
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
        <Zap strokeWidth={2.5} /> Matheus Palmieri
      </a>

      <ul className="flex gap-3">
        <NavbarLink route="/">Home</NavbarLink>
        <NavbarLink route="/about" disabled>
          About me
        </NavbarLink>
        <NavbarLink route="/skills" disabled>
          Skills
        </NavbarLink>
        <NavbarLink route="/projects" disabled>
          Projects
        </NavbarLink>
      </ul>
    </nav>
  </div>
);
