import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DosageTimeInterval = (props) => {
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
        {["1", " 2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map(
          (value) => (
            <SelectItem value={value} key={value}>
              {value === "1" ? `${value} hour` : `${value} hours`}
            </SelectItem>
          ),
        )}
      </SelectContent>
    </Select>
  );
};

export default DosageTimeInterval;
