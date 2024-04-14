import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"div"> {
  children: JSX.Element | React.ReactNode;
  className?: string;
}

export const Container = ({ children, className, ...props }: Props) => (
  <div {...props} className={twMerge("container", className)}>
    {children}
  </div>
);
