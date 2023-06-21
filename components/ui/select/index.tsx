import classes from "./select.module.scss";

interface SelectProps {
  values: any[];
  label?: string;
}

export default function Select(props: SelectProps) {
  const { values, label } = props;
  return (
    <div className={classes.select_wrapper}>
      {label && <label htmlFor={label}>{label}</label>}
      <select>
        {values.map((value: any) => (
          <option id={label} key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
