import { AppContext } from "@/context/AppContext";
import { useCallback, useContext, useMemo, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import DosageTimeInterval from "./DosageTimeInterval";
import DosagePeriodInterval from "./DosagePeriodInterval";
import ConfirmationModal from "./ConfirmationModal";
import { KYCContext } from "@/context/KYC";

const DosageRegistration = () => {
  const { setCurrentStep, stepData } = useContext(AppContext);
  const { data, setData } = useContext(KYCContext);
  const [confirmed, setConfirmed] = useState(false);

  const [formData, setFormData] = useState({
    medication: data.medication || "",
    dateMedicationStarted: data.dateMedicationStarted || "",
    dosageInterval: data.dosageInterval || "",
    dosageTime: data.dosageTime || "",
  });
  const handleOnChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = useCallback(() => {
    const { medication, dateMedicationStarted, dosageInterval, dosageTime } =
      formData;
    return (
      medication !== "" &&
      dateMedicationStarted !== "" &&
      dosageInterval !== "" &&
      dosageTime !== ""
    );
  }, [formData]);

  // Enable or disable button based on form validation
  const isButtonDisabled = useMemo(() => {
    return !validateForm();
  }, [validateForm]);

  const handlePopUp = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      setData((prevObj) => ({
        ...prevObj,
        ...formData,
      }));
    }
    setConfirmed(true);

    // TODO: Else Handle invalid form submission FOR FEEDBACK
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(false);
    window.alert(`All Form Details:\n${JSON.stringify(data)}`);
  };

  return (
    <>
      <form className="flex w-full flex-col gap-10">
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="name-of-med">
              What medication are you currently on ?
            </Label>
            <Input
              id="name-of-med"
              name="medication"
              value={formData["medication"]}
              onChange={(event) =>
                handleOnChange(event.target.value, "medication")
              }
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="date-started">Date started</Label>
            <Input
              type="date"
              id="date-started"
              name="dateMedicationStarted"
              value={formData["dateMedicationStarted"]}
              onChange={(event) =>
                handleOnChange(event.target.value, "dateMedicationStarted")
              }
              max={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="period-interval">Dosage period Interval</Label>
            <DosagePeriodInterval
              id="period-interval"
              name="dosageInterval"
              selectValue={formData["dosageInterval"]}
              handleOnChange={(val) => handleOnChange(val, "dosageInterval")}
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="time-interval">
              Set dosage time interval (for every)
            </Label>
            <DosageTimeInterval
              id="time-interval"
              name="dosageTime"
              selectValue={formData["dosageTime"]}
              handleOnChange={(val) => handleOnChange(val, "dosageTime")}
            />
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
            onClick={handlePopUp}
            className="primary_btn"
            disabled={isButtonDisabled}
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
