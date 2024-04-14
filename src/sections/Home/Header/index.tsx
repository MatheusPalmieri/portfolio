import Avatar from "@/assets/avatars/hello.png";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { ComponentProps } from "react";

export const Header = () => (
  <header className="h-[100dvh] bg-zinc-900 flex flex-col items-center justify-center gap-6">
    <div className="size-52 rounded-full bg-gradient-to-b from-slate-500 to-slate-300 overflow-hidden">
      <img src={Avatar} alt="avatar" className="object-cover" />
    </div>

    <div className="flex flex-col items-center gap-3">
      <h2 className="text-5xl font-extrabold tracking-wider">
        Hi, I'm Matheus Palmieri
      </h2>
      <p className="text-xl font-medium">
        An <span className="text-zinc-300 font-bold">Software Engineer</span>{" "}
        from Brazil
      </p>
    </div>

    <div className="flex gap-6">
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
  </header>
);

interface LinkProps extends ComponentProps<"a"> {
  children: React.ReactNode;
}

const Link = ({ children, ...props }: LinkProps) => (
  <a
    {...props}
    className="text-zinc-300 hover:text-white duration-300"
    target="_blank"
  >
    {children}
  </a>
);
