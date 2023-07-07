import EventList from "@/components/events";
import { getFilteredEvents } from "@/mock/events";
import classes from "@/pages/homePage.module.scss";
import Container from "@/components/ui/container";
import EventFilter from "@/components/events/event-filter";
import { useRouter } from "next/router";
import Button from "@/components/ui/button";

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

  const incorrectUrl = (!year ||
    !month ||
    isNaN(year) ||
    isNaN(month) ||
    month < 1 ||
    month > 12 ||
    events.length === 0) && (
    <>
      <p>Nothing found or incorrect URL 😕</p>
      <Button href="/events">Go to all events</Button>
    </>
  );

  const eventList = events.length > 0 && <EventList events={events} />;

  return (
    <div className={classes.home}>
      <Container>
        <h1>Filtered events</h1>
        <EventFilter onFilter={filterHandler} />
        {incorrectUrl}
        {eventList}
      </Container>
    </div>
  );
}
