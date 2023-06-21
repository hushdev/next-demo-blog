import EventList from "@/components/events";
import { getAllEvents } from "@/mock/events";
import classes from "@/pages/HomePage.module.scss";
import Container from "@/components/ui/container";
import EventFilter from "@/components/events/event-filter";

export default function Events() {
  const events = getAllEvents();

  return (
    <div className={classes.home}>
      <Container>
        <h1>All Events</h1>
        <EventFilter/>
        <EventList events={events} />
      </Container>
    </div>
  );
}
