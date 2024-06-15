import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GenderSelect = (props) => {
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
        {["Male", "Female", "Others"].map((value) => (
          <SelectItem value={value} key={value}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default GenderSelect;
