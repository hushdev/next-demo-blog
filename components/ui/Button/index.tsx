import { ReactNode } from "react";
import classes from "./button.module.scss";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { children, href, className, onClick } = props;

  if (href) {
    return (
      <Link
        href={href}
        className={`${classes.button} ${classes.buttonHref} ${className}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`${classes.button} ${className}`}>{children}</button>
  );
}
