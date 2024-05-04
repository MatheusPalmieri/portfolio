import { useState, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

export const Cursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{
        left: `${position.x - 16}px`,
        top: `${position.y - 14}px`,
      }}
    />
  );
};
