import { ReactNode } from "react";
import classes from "./Layout.module.scss";
import Header from "./Header";
import Container from "../ui/Container";

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
