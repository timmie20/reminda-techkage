import { AppContext } from "@/context/AppContext";
import { useCallback, useContext, useMemo, useState } from "react";
import { Label } from "./ui/label";
import SelectOption from "./SelectOption";
import { Textarea } from "./ui/textarea";
import { KYCContext } from "@/context/KYC";

const MedicalHistory = () => {
  const { setCurrentStep, stepData } = useContext(AppContext);
  const { data, setData } = useContext(KYCContext);
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

  const handleNextAction = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      setData((prevObj) => ({
        ...prevObj,
        ...formData,
      }));
      setCurrentStep(stepData[2]);
    }
    // TODO: Else Handle invalid form submission FOR FEEDBACK
  };
  console.log(data);
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
            <Textarea
              id="ailment-nature"
              name="alimentType"
              value={formData["alimentType"]}
              onChange={(event) =>
                handleOnChange(event.target.value, "alimentType")
              }
            />
          </div>
        )}

        <div className="flex gap-4">
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
            onClick={handleNextAction}
            disabled={isButtonDisabled}
          >
            continue
          </button>
        </div>
      </form>
    </>
  );
};

export default MedicalHistory;
