import { AppContext } from "@/context/AppContext";
import { useCallback, useContext, useMemo, useState } from "react";
import { Label } from "./ui/label";
import SelectOption from "./SelectOption";
import { KYCContext } from "@/context/KYC";
import { Input } from "./ui/input";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const MedicalHistory = () => {
  const navigate = useNavigate();
  const { setCurrentStep, stepData } = useContext(AppContext);
  const { data, setData } = useContext(KYCContext);
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    aliment: data.aliment || "",
    alimentType: data.alimentType || "",
    currentlyHospitalized: data.currentlyHospitalized || "",
    previouslyHospitalized: data.previouslyHospitalized || "",
  });
  const handleOnChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = useCallback(() => {
    const {
      aliment,
      alimentType,
      currentlyHospitalized,
      previouslyHospitalized,
    } = formData;

    const hasAliment = aliment === "yes";

    // Common conditions for both cases
    const commonConditions =
      aliment !== "" &&
      currentlyHospitalized !== "" &&
      previouslyHospitalized !== "";

    if (hasAliment) {
      // If the user has an ailment, validate ailmentType as well
      return commonConditions && alimentType !== "";
    } else {
      // If the user does not have an ailment, alimentType should be empty
      return commonConditions && alimentType === "";
    }
  }, [formData]);

  // Enable or disable button based on form validation
  const isButtonDisabled = useMemo(() => {
    return !validateForm();
  }, [validateForm]);

  const handleSubmit = async () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      setData((prevObj) => ({
        ...prevObj,
        ...formData,
      }));
    }
console.log('====================================');
console.log(data);
console.log('====================================');
    const valRef = collection(db, "users");

    const req = {
      ...(user.uid && { userId: user.uid }),
      ...(data && data),
      ...(formData && formData),
    };

    // save fields to Firestore Database
    await addDoc(valRef, { req });
    // TODD: IS FEEDBACK NEEDED HERE BEFORE RE-DIRECTING TO DASHBOARD?
    navigate("/dashboard");
  };
  return (
    <>
      <form className="w-full space-y-4">
        <div>
          <Label htmlFor="has-ailment">Any current Disorder or Ailment?</Label>
          <SelectOption
            id="has-ailment"
            name="aliment"
            selectValue={formData["aliment"]}
            handleOnChange={(val) => handleOnChange(val, "aliment")}
          />
        </div>

        {formData["aliment"] === "yes" && (
          <div>
            <Label htmlFor="ailment-nature">If yes , State it</Label>
            <Input
              id="ailment-nature"
              name="alimentType"
              value={formData["alimentType"]}
              onChange={(event) =>
                handleOnChange(event.target.value, "alimentType")
              }
              placeholder="For example : Headache, Malaria, Food Poisoning"
            />
          </div>
        )}

        <div className="w-full">
          <Label htmlFor="is-hospitalized">
            Are you currently hospitalized?
          </Label>
          <SelectOption
            id="is-hospitalized"
            name="currentlyHospitalized"
            selectValue={formData["currentlyHospitalized"]}
            handleOnChange={(val) =>
              handleOnChange(val, "currentlyHospitalized")
            }
          />
        </div>
        <div className="w-full">
          <Label htmlFor="been-hospitalized">
            Have you been previously hospitalized?
          </Label>
          <SelectOption
            id="been-hospitalized"
            name="previouslyHospitalized"
            selectValue={formData["previouslyHospitalized"]}
            handleOnChange={(val) =>
              handleOnChange(val, "previouslyHospitalized")
            }
          />
        </div>

        <div className="flex w-full gap-3">
          <button
            className="primary_btn"
            type="button"
            onClick={() => setCurrentStep(stepData[0])}
          >
            go back
          </button>
          <button
            className="primary_btn"
            type="button"
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default MedicalHistory;
