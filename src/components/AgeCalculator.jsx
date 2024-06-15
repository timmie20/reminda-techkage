import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function AgeCalculator() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [age, setAge] = useState(0);

  const handleChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const today = new Date();
      const birthYear = date.getFullYear();
      const ageInYears = today.getFullYear() - birthYear;
      setAge(
        ageInYears -
          (today.getMonth() === date.getMonth() &&
          today.getDate() < date.getDate()
            ? 1
            : 0),
      );
    } else {
      setAge(0);
    }
  };

  return (
    <div>
      <Label htmlFor="date-picker">Select your date of birth</Label>
      <Input
        id="date-picker"
        type="date"
        onChange={(event) => handleChange(new Date(event.target.value))}
        max={new Date().toISOString().split("T")[0]}
      />
    </div>
  );
}

export default AgeCalculator;