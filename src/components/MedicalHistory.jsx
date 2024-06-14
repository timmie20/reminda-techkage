import { AppContext } from "@/context/AppContext";
import  { useContext } from "react";
import { Label } from "./ui/label";
import SelectOption from "./SelectOption";
import { Textarea } from "./ui/textarea";

const MedicalHistory = () => {
  const { setCurrentStep, stepData } = useContext(AppContext);

  return (
    <>
      <form className=" w-full space-y-4">
        <div>
          <Label htmlFor="has-ailment">Any current Disorder or Ailment?</Label>
          <SelectOption id="has-ailment" />
        </div>

        <div>
          <Label htmlFor="ailment-nature">If yes , State it</Label>
          <Textarea id="ailment-nature" />
        </div>

        <div className="flex gap-4">
          <div className="w-full">
            <Label htmlFor="is-hospitalized">
              Are you currently hospitalised?
            </Label>
            <SelectOption id="is-hospitalized" />
          </div>
          <div className="w-full">
            <Label htmlFor="been-hospitalized">
              Have you been previously hospitalised?
            </Label>
            <SelectOption id="been-hospitalized" />
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
            onClick={() => setCurrentStep(stepData[2])}
          >
            continue
          </button>
        </div>
      </form>
    </>
  );
};

export default MedicalHistory;