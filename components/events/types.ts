export type Events = {
  events: Event[];
};

export type Event = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
};

export type EventFilterProps = {
  onFilter: (year: number | null, month: number | null) => void;
};
