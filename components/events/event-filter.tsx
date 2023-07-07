import { getMonths, getYears } from "@/mock/events";
import Button from "../ui/button";
import classes from "./event-filter.module.scss";
import Select from "../ui/select";
import Card from "../ui/card";
import { EventFilterProps } from "./types";
import { useEffect, useState } from "react";

export default function EventFilter(props: EventFilterProps) {
  const { onFilter } = props;

  const years = getYears();
  const months = getMonths();

  const [year, setYear] = useState(Number(years[0]));
  const [month, setMonth] = useState(months[0]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    onFilter(year, month);
  };

  return (
    <form onSubmit={submitHandler} className={classes.filter}>
      <Card className={classes.filter__card}>
        <Select
          values={years}
          label="Year"
          onSelect={(value) => setYear(value)}
        />
        <Select
          values={months}
          label="Month"
          onSelect={(value) => setMonth(value)}
        />
        <Button className={classes.filter__select_button}>Search</Button>
      </Card>
    </form>
  );
}
