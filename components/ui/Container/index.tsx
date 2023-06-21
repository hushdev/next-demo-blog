import { ReactNode } from "react";
import classes from "./container.module.scss";

interface ContainerProps {
  children: ReactNode;
}

export default function Container(props: ContainerProps) {
  const { children } = props;

  return <div className={classes.container}>{children}</div>;
}
