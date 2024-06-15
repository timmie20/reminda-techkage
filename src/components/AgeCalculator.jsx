import { Label } from "./ui/label";
import { Input } from "./ui/input";

function AgeCalculator({ name, value, handleChange, ...rest }) {
  return (
    <div>
      <Label htmlFor="date-picker">Select your date of birth</Label>
      <Input
        id="date-picker"
        type="date"
        value={value}
        onChange={handleChange}
        max={new Date().toISOString().split("T")[0]}
        name={name}
        {...rest}
      />
    </div>
  );
}

export default AgeCalculator;
