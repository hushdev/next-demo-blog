import EventItem from "./event-item";
import { Events } from "./types";
import classes from "./events.module.scss";

export default function EventList(props: Events) {
  return (
    <ul className={classes.eventList}>
      {props.events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          location={event.location}
          date={event.date}
          image={event.image}
          isFeatured={event.isFeatured}
        />
      ))}
    </ul>
  );
}
