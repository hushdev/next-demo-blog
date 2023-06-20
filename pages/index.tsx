import EventList from "@/components/events";
import { getAllEvents } from "@/mock/events";
import classes from "./HomePage.module.scss";
import Container from "@/components/ui/Container";

export default function HomePage() {
  const events = getAllEvents();

  return (
    <div className={classes.home}>
      <Container>
        <h1>Home page</h1>
        <EventList events={events} />
      </Container>
    </div>
  );
}
