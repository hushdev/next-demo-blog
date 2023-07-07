import EventList from "@/components/events";
import { getAllEvents } from "@/mock/events";
import classes from "@/pages/HomePage.module.scss";
import Container from "@/components/ui/container";
import EventFilter from "@/components/events/event-filter";
import { useRouter } from "next/router";

export default function Events() {
  const events = getAllEvents();
  const router = useRouter();

  const filterHandler = (year: number | null, month: number | null) => {
    const url = `/events/${year}/${month}`;
    router.push(url);
  };

  return (
    <div className={classes.home}>
      <Container>
        <h1>All Events</h1>
        <EventFilter onFilter={filterHandler} />
        <EventList events={events} />
      </Container>
    </div>
  );
}
