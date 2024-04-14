import { useNavigate } from "react-router-dom";
import { NavbarLink } from "./Link";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <nav
        className="
        h-16 p-3 bg-[rgba(0,0,0,0.1)] backdrop-filter backdrop-blur-xl rounded-lg
        flex items-center justify-between
      "
      >
        <h1
          className="text-2xl font-medium cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Matheus Palmieri
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
