import EventList from "@/components/events";
import { getFilteredEvents } from "@/mock/events";
import classes from "@/pages/HomePage.module.scss";
import Container from "@/components/ui/container";
import EventFilter from "@/components/events/event-filter";
import { useRouter } from "next/router";

export default function FilteredEvents() {
  const router = useRouter();
  const filterData = router.query.slug;

  const year = filterData && +filterData[0];
  const month = filterData && +filterData[1];
  const events = getFilteredEvents({ year, month });

  const filterHandler = (year: number | null, month: number | null) => {
    const url = `/events/${year}/${month}`;
    router.push(url);
  };

  if (
    !year ||
    !month ||
    isNaN(year) ||
    isNaN(month) ||
    month < 1 ||
    month > 12
  ) {
    return (
      <Container>
        <EventFilter onFilter={filterHandler} />
        <p>Incorrect URL</p>
      </Container>
    );
  }

  if (events.length === 0) {
    return (
      <div className={classes.home}>
        <EventFilter onFilter={filterHandler} />
        <p>Nothing found</p>
      </div>
    );
  }

  return (
    <div className={classes.home}>
      <Container>
        <h1>Filtered events</h1>
        <EventFilter onFilter={filterHandler} />
        <EventList events={events} />
      </Container>
    </div>
  );
}
