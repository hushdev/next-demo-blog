import { ReactNode } from "react";
import classes from "./Button.module.scss";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function Button(props: ButtonProps) {
  const { children, href, className } = props;

  if (href) {
    return (
      <Link href={href} className={`${classes.button} ${classes.buttonHref} ${className}`}>
        {children}
      </Link>
    );
  }
  return <button className={`${classes.button} ${className}`}>{children}</button>;
}
