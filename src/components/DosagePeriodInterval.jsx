import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DosagePeriodInterval = ({ id }) => {
  return (
    <Select>
      <SelectTrigger className="w-full" id={id}>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {["daily", "weekly", "montly"].map((value, index) => (
          <SelectItem value={value} key={index}>
            {value.toLocaleUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DosagePeriodInterval;
