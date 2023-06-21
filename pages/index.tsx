import EventList from "@/components/events";
import { getFeaturedEvents } from "@/mock/events";
import classes from "./homePage.module.scss";
import Container from "@/components/ui/container";

export default function HomePage() {
  const events = getFeaturedEvents();

  return (
    <div className={classes.home}>
      <Container>
        <h1>Featured Events</h1>
        <EventList events={events} />
      </Container>
    </div>
  );
}
