import classes from "./select.module.scss";

interface SelectProps {
  values: any[];
  label?: string;
  onSelect: (value: any) => void;
}

export default function Select(props: SelectProps) {
  const { values, label, onSelect } = props;
  return (
    <div className={classes.select_wrapper}>
      {label && <label htmlFor={label}>{label}</label>}
      <select onChange={(e) => onSelect(e.target.value)}>
        {values.map((value: any) => (
          <option id={label} key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
