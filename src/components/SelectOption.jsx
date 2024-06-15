import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectOption = (props) => {
  const { id, name, selectValue, handleOnChange, ...rest } = props;
  const options = [
    { lable: "Yes", value: "yes" },
    { lable: "No", value: "no" },
    { lable: "I'd rather not say", value: "null" },
  ];
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
        {options.map(({ lable, value }) => (
          <SelectItem value={value} key={value}>
            {lable}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectOption;
