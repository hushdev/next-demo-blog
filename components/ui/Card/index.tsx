import classes from "./Card.module.scss";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  center?: boolean;
  className?: string;
}

export default function Card(props: CardProps) {
  const { children, center, className } = props;
  return (
    <div
      className={`${classes.card} ${center ? classes.center : ""} ${className}`}
    >
      {children}
    </div>
  );
}
