import { Button } from "../ui/button";

interface Props {
  file: unknown;
  flag: string;
}

export const ResumeButton = ({ file, flag }: Props) => (
  <div className="flex">
    <Button
      className="h-10 bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)] duration-300 rounded-full text-xl font-medium"
      onClick={() => window.open(file as string)}
    >
      Resume
      <span className="ml-2">{flag}</span>
    </Button>
  </div>
);
