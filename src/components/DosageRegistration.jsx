import { useCallback, useContext, useMemo, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import DosageTimeInterval from "./DosageTimeInterval";
import DosagePeriodInterval from "./DosagePeriodInterval";
import ConfirmationModal from "./ConfirmationModal";
import { AuthContext } from "@/context/AuthContext";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { toast } from "sonner";

const DosageRegistration = ({ callBackFun }) => {
  const { user } = useContext(AuthContext);
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    medication: "",
    reason: "",
    dateMedicationStarted: "",
    dosageInterval: "",
    dosageTime: "",
  });
  const [loading, setLoading] = useState(false);
  const handleOnChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = useCallback(() => {
    const {
      medication,
      reason,
      dateMedicationStarted,
      dosageInterval,
      dosageTime,
    } = formData;
    return (
      medication !== "" &&
      reason !== "" &&
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

    const valRef = collection(db, "dosage");

    const req = {
      ...(user.uid && { userId: user.uid }),
      ...(formData && { ...formData }),
    };
    setLoading(true);
    // save fields to Firestore Database
    try {
      await addDoc(valRef, { req });
      setLoading(false);
      setConfirmed(false);
      callBackFun(); // this is a props to close the modal after submission
      toast("Dosage reminder", {
        description: "You've set reminder for your medication",
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast("Oops", {
        description: "Please, try again",
      });
    }
  };

  return (
    <>
      <h4 className="text-xl font-bold text-green_light">
        Create a dosage reminder template
      </h4>
      <form className="flex w-full flex-col gap-4">
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
            placeholder="Paracetamol"
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="reason-of-med">Reason for medication?</Label>
          <Input
            id="reason-of-med"
            name="reason"
            value={formData["reason"]}
            onChange={(event) => handleOnChange(event.target.value, "reason")}
            placeholder="e.g Headache, Food poisoning"
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
            isDisabled={loading}
          />
        )}
      </form>
    </>
  );
};

export default DosageRegistration;
