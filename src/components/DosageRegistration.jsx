import { useCallback, useContext, useMemo, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import DosageTimeInterval from "./DosageTimeInterval";
import DosagePeriodInterval from "./DosagePeriodInterval";
import ConfirmationModal from "./ConfirmationModal";

import { AuthContext } from "@/context/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";

const DosageRegistration = () => {
  const { user } = useContext(AuthContext);
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    medication: "",
    dateMedicationStarted: "",
    dosageInterval: "",
    dosageTime: "",
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
      setConfirmed(true);
    }

    // TODO: Else Handle invalid form submission FOR FEEDBACK
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmed(false);

    const valRef = collection(db, "dosage");

    const req = {
      ...(user.uid && { userId: user.uid }),
      ...(formData && { ...formData }),
    };

    // save fields to Firestore Database
    await addDoc(valRef, { req });

    window.alert("Congratulations, ");
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-green_light">
        Create a dosage reminder template
      </h1>
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
        <div className="w-full">
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
