import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { generate } from "@/Helper/RemindaAi";

const Ai = () => {
  const [ailmentType, setAilmentType] = useState("");

  const handleSubmit = async () => {
    try {
      const result = await generate(ailmentType);
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="w-1/2">
      <Input
        value={ailmentType}
        onChange={(ev) => setAilmentType(ev.target.value)}
      />
      <Button onClick={handleSubmit}>submit</Button>
    </div>
  );
};

export default Ai;
