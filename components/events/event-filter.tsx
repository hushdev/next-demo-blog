import { getMonths, getYears } from "@/mock/events";
import Button from "../ui/button";
import classes from "./event-filter.module.scss";
import Select from "../ui/select";
import Card from "../ui/card";

export default function EventFilter() {
  const years = getYears();
  const months = getMonths();

  const submitHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler} className={classes.filter}>
      <Card className={classes.filter__card}>
        <Select values={years} label="Year" />
        <Select values={months} label="Month" />
        <Button className={classes.filter__select_button}>Search</Button>
      </Card>
    </form>
  );
}
