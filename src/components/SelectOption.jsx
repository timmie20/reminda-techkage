import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectOption = ({ id }) => {
  const options = [
    { lable: "Yes", value: "yes" },
    { lable: "No", value: "no" },
    { lable: "I'd rather not say", value: "null" },
  ];
  return (
    <Select>
      <SelectTrigger className="w-full" id={id}>
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
