import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  children: string;
  route: string;
  disabled?: boolean;
}

export const NavbarLink = ({ children, route, disabled = false }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === route;

  return (
    <li
      className={`text-md md:text-lg font-medium hover:text-white duration-300 
      ${isActive ? "text-white" : "text-zinc-400"}
      ${disabled ? "opacity-10" : "cursor-pointer"}`}
      onClick={() => !disabled && navigate(route)}
      title={disabled ? "Coming soon" : ""}
    >
      {children}
    </li>
  );
};
