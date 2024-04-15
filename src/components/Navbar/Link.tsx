import { useNavigate } from "react-router-dom";

interface Props {
  children: string;
  route: string;
  disabled?: boolean;
}

export const NavbarLink = ({ children, route, disabled = false }: Props) => {
  const navigate = useNavigate();

  return (
    <li
      className={`text-zinc-200 text-lg font-medium hover:text-white duration-300 ${
        disabled ? "opacity-30" : "cursor-pointer"
      }`}
      onClick={() => !disabled && navigate(route)}
      title={disabled ? "Coming soon" : ""}
    >
      {children}
    </li>
  );
};
