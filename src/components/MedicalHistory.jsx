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
import { toast } from "sonner";
import Loader from "./ui/Loader";

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
  const [loading, setLoading] = useState(false);

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
    setData((prevObj) => ({
      ...prevObj,
      ...formData,
    }));
    const valRef = collection(db, "users");

    const req = {
      ...(user.uid && { userId: user.uid }),
      ...(data && data),
      ...(formData && formData),
    };

    setLoading(true);

    try {
      await addDoc(valRef, { req });
      navigate("/dashboard");
      toast("Profile created", {
        description: "View profile in dashboard",
      });
    } catch (error) {
      toast("Failed", {
        description: "Unable to create profile, try again later",
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form className="w-full">
        <div className="space-y-2">
          <Label htmlFor="has-ailment">Any current Disorder or Ailment?</Label>
          <SelectOption
            id="has-ailment"
            name="aliment"
            selectValue={formData["aliment"]}
            handleOnChange={(val) => handleOnChange(val, "aliment")}
          />
        </div>

        {formData["aliment"] === "yes" && (
          <div className="mt-3 space-y-2">
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

        <div className="mt-3 space-y-2">
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
        <div className="mt-3 space-y-2">
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

        <div className="mt-7 flex w-full gap-3">
          <button
            className="primary_btn"
            type="button"
            onClick={() => setCurrentStep(stepData[1])}
          >
            go back
          </button>
          <button
            className="primary_btn"
            type="button"
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            {loading ? <Loader size="24" color="white" stroke="2" /> : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default MedicalHistory;
