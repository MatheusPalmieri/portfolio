import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { ComponentProps } from "react";

export const Footer = () => (
  <footer className="h-32 bg-zinc-900 flex flex-col items-center justify-center gap-3 text-zinc-400">
    <div className="flex gap-3">
      <Link href="https://www.linkedin.com/in/matheusandrepalmieri/">
        <Linkedin />
      </Link>
      <Link href="https://github.com/MatheusPalmieri">
        <Github />
      </Link>
      <Link href="mailto:matheuspalmieridev+github@gmail.com">
        <Mail />
      </Link>
      <Link href="https://www.youtube.com/@matheuspalmieridev">
        <Youtube />
      </Link>
    </div>

    <p className="text-md font-medium">Matheus Palmieri &copy; 2024</p>
  </footer>
);

interface LinkProps extends ComponentProps<"a"> {
  children: React.ReactNode;
}

const Link = ({ children, ...props }: LinkProps) => (
  <a {...props} className="hover:text-white duration-300" target="_blank">
    {children}
  </a>
);
