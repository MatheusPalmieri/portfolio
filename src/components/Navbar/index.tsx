import { useNavigate } from "react-router-dom";
import { NavbarLink } from "./Link";
import { Zap } from "lucide-react";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full fixed z-50 p-6">
      <nav
        className="
        h-16 p-3 bg-[rgba(100,100,100,0.1)] backdrop-filter backdrop-blur-xl rounded-lg
        flex items-center justify-between
      "
      >
        <h1
          className="text-2xl font-medium cursor-pointer flex items-center gap-3"
          onClick={() => {
            navigate("/");
          }}
        >
          <Zap /> Matheus Palmieri
        </h1>

        <ul className="flex gap-3">
          <NavbarLink route="/">Home</NavbarLink>
          <NavbarLink route="/about">About me</NavbarLink>
          <NavbarLink route="/skills">Skills</NavbarLink>
          <NavbarLink route="/projects">Projects</NavbarLink>
        </ul>
      </nav>
    </div>
  );
};
