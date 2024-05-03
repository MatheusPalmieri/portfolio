import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"div"> {
  children: JSX.Element | React.ReactNode;
  row?: boolean;
  className?: string;
}

export const Stack = ({
  children,
  row = false,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={twMerge(
        `flex gap-3 ${row ? "flex-row" : "flex-col"}`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
