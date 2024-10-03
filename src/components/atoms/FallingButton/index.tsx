import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  useState,
} from "react";

import { cn } from "@/lib/utils";
import "./styles.css";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const FallingButton: React.FC<Props> = ({
  className,
  onClick,
  children,
  ...props
}) => {
  const [fall, setFall] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
    setFall(true);
    setTimeout(() => setFall(false), 10000);

    onClick?.(e);
  };

  return (
    <button
      className={cn(
        "flex items-center justify-center w-10 h-10",
        `falling-button ${fall ? "fall" : ""}`,
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
