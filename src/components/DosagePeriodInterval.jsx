import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DosagePeriodInterval = (props) => {
  const { id, name, selectValue, handleOnChange, ...rest } = props;
  return (
    <Select
      name={name}
      id={id}
      value={selectValue}
      onValueChange={handleOnChange}
      {...rest}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {["daily", "weekly", "montly"].map((value) => (
          <SelectItem key={value} value={value}>
            {value.toLocaleUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DosagePeriodInterval;
