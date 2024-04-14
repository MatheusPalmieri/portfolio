import { NavbarLink } from "./Link";

export const Navbar = () => {
  return (
    <div className="p-6">
      <nav
        className="
        h-16 p-3 bg-[rgba(0,0,0,0.1)] backdrop-filter backdrop-blur-xl rounded-lg
        flex items-center justify-between
      "
      >
        <h1 className="text-2xl font-medium">Matheus Palmieri</h1>

        <ul className="flex gap-3">
          <NavbarLink>Home</NavbarLink>
          <NavbarLink>About me</NavbarLink>
          <NavbarLink>Skills</NavbarLink>
          <NavbarLink>Projects</NavbarLink>
        </ul>
      </nav>
    </div>
  );
};
