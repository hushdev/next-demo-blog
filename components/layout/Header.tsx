import Link from "next/link";
import Container from "../ui/container";
import classes from "./header.module.scss";

export default function Header() {
  return (
    <div className={classes.header}>
      <Container>
        <nav>
          <Link href="/" className={classes.logo}>Next-demo-blog</Link>
          <ul>
            <li>
              <Link href="/events">All events</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
