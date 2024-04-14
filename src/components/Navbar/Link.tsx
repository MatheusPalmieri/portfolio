export const NavbarLink = ({ children }: { children: string }) => {
  return (
    <li className="text-zinc-200 text-lg font-medium hover:text-white cursor-pointer duration-300">
      {children}
    </li>
  );
};
