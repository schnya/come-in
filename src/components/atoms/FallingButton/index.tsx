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
    setTimeout(() => {
      setFall(false); // アニメーション後にリセット
    }, 1000); // アニメーションの持続時間に合わせてリセット

    onClick?.(e);
  };

  return (
    <button
      className={cn(`falling-button ${fall ? "fall" : ""}`, className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
