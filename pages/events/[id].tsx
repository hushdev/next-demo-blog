import EventDetails from "@/components/event-details";
import Container from "@/components/ui/container";
import { getEventById } from "@/mock/events";
import { useRouter } from "next/router";

export default function SingleEventPage() {
  const router = useRouter();
  const eventId = String(router.query.id);
  const event = getEventById(eventId);

  if (!event) return <Container>Nothing found</Container>;

  return (
    <EventDetails
      id={event.id}
      title={event.title}
      description={event.description}
      location={event.location}
      date={event.date}
      image={event.image}
      isFeatured={event.isFeatured}
    />
  );
}
