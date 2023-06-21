import { Event } from "../events/types";
import Card from "../ui/card";
import classes from "./event-details.module.scss";

export default function EventDetails(props: Event) {
  const { title, image, description, location, date, isFeatured } = props;
  return (
    <section className={classes.details}>
      <div className={classes.details__heading}>{title}</div>
      <Card className={classes.details__overview}>
        <img src={"/" + image} alt={title} />
        <div className={classes.details__overview_text}>
          <span>
            <b>Location</b>: {location}
          </span>
          <span>
            <b>Date</b>: {date}
          </span>
        </div>
      </Card>
      <div className={classes.details__description}>{description}</div>
    </section>
  );
}
