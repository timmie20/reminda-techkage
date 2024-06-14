import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GenderSelect = ({ id }) => {
  return (
    <Select>
      <SelectTrigger className="w-full" id={id}>
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
