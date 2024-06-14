import { AppContext } from "@/context/AppContext";
import React, { useContext, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import DosageTimeInterval from "./DosageTimeInterval";
import DosagePeriodInterval from "./DosagePeriodInterval";
import ConfirmationModal from "./ConfirmationModal";

const DosageRegistration = () => {
  const { setCurrentStep, stepData } = useContext(AppContext);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="flex w-full flex-col gap-10">
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="name-of-med">
              What medication are you currently on ?
            </Label>
            <Input id="name-of-med" />
          </div>
          <div className="flex-1">
            <Label htmlFor="date-started">Date started</Label>
            <Input id="date-started" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="period-interval">Dosage period Interval</Label>
            <DosagePeriodInterval id="period-interval" />
          </div>
          <div className="flex-1">
            <Label htmlFor="time-interval">
              Set dosage time interval (for every)
            </Label>
            <DosageTimeInterval id="time-interval" />
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setCurrentStep(stepData[1])}
            className="primary_btn"
          >
            go back
          </button>
          <button
            type="button"
            onClick={() => setConfirmed(true)}
            className="primary_btn"
          >
            Submit
          </button>
        </div>
        {confirmed && (
          <ConfirmationModal
            confirmed={confirmed}
            setConfirmed={setConfirmed}
            handleSubmit={handleSubmit}
          />
        )}
      </form>
    </>
  );
};

export default DosageRegistration;