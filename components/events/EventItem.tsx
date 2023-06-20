import { Event } from "./types";
import Card from "../ui/Card";
import classes from "./Events.module.scss";
import Button from "../ui/Button";

export default function EventItem(props: Event) {
  const { id, title, image, description, location, date } = props;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={classes.eventItem}>
      <Card>
        <img src={"/" + image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Location: {location}</p>
        <p>Date: {formattedDate}</p>
        <Button href={`/events/${id}`} className={classes.linkToEvent}>Exprole event</Button>
      </Card>
    </li>
  );
}
