import { useNavigate } from "react-router-dom";

export const NavbarLink = ({
  children,
  route,
}: {
  children: string;
  route: string;
}) => {
  const navigate = useNavigate();

  return (
    <li
      className="text-zinc-200 text-lg font-medium hover:text-white cursor-pointer duration-300"
      onClick={() => navigate(route)}
    >
      {children}
    </li>
  );
};
