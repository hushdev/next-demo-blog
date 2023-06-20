import Link from "next/link";
import Container from "../ui/Container";
import classes from "./Header.module.scss";

export default function Header() {
  return (
    <div className={classes.header}>
      <Container>
        <nav>
          <Link href="/" className={classes.logo}>Next-demo-blog</Link>
          <ul>
            <li>
              <Link href="/all-events">All events</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
