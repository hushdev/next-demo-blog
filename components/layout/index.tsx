import { ReactNode } from "react";
import classes from "./layout.module.scss";
import Header from "./header";
import Container from "../ui/container";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const year = new Date().getFullYear();
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className={classes.footer}>
        <Container>Next-demo-blog by Ildar Anikin, {year}</Container>
      </footer>
    </>
  );
}
