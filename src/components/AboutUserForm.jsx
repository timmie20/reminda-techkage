import { AppContext } from "@/context/AppContext";
import { useCallback, useContext, useMemo } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import AgeCalculator from "./AgeCalculator";
import GenderSelect from "./GenderSelect";
import { useState } from "react";
import { getAgeValue } from "@/Helper/utils";
import { KYCContext } from "@/context/KYC";

const AboutUserForm = () => {
  const { setCurrentStep, stepData } = useContext(AppContext);
  const { data, setData } = useContext(KYCContext);
  const [formData, setFormData] = useState({
    firstname: data.firstname || "",
    lastname: data.lastname || "",
    age: data.age || "",
    mobile: data.mobile || "",
    gender: data.gender || "",
  });
  const [age, setAge] = useState("");
  const getAgeValueMemoized = useMemo(() => {
    return (dateOfBirth) => {
      //  getAgeValue returns an object with `age & date` properties
      return getAgeValue(dateOfBirth);
    };
  }, []); // Dependencies array is empty because getAgeValue is a static function

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (event.target.name === "age") {
      const dateOfBirth = new Date(value);
      const { age } = getAgeValueMemoized(dateOfBirth);
      setFormData({ ...formData, age: age });
      setAge(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const validateForm = useCallback(() => {
    return (
      formData.firstname !== "" &&
      formData.lastname !== "" &&
      formData.age !== "" &&
      formData.mobile !== "" &&
      formData.gender !== ""
    );
  }, [formData]);

  // Enable or disable button based on form validation
  const isButtonDisabled = useMemo(() => {
    return !validateForm();
  }, [validateForm]);
  const handleNextAction = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      setData(formData);
      setCurrentStep(stepData[1]);
    }
    // TODO: Else Handle invalid form submission FOR FEEDBACK
  };

  return (
    <>
      <form className="flex w-full flex-col gap-10">
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="firstname">Firstname</Label>
            <Input
              type="text"
              id="firstname"
              name="firstname"
              value={formData["firstname"]}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="lastname">Lastname</Label>
            <Input
              type="text"
              id="lastname"
              name="lastname"
              value={formData["lastname"]}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <AgeCalculator name="age" value={age} handleChange={handleOnChange} />

          <div className="flex-1">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              id="mobile"
              name="mobile"
              type="number"
              value={formData["mobile"]}
              onChange={handleOnChange}
            />
          </div>

          <div>
            <Label htmlFor="gender">Gender</Label>
            <GenderSelect
              id="gender"
              name="gender"
              selectValue={formData["gender"]}
              handleOnChange={(value) =>
                setFormData({ ...formData, gender: value })
              }
            />
          </div>
        </div>
        <button
          className="primary_btn"
          type="button"
          onClick={handleNextAction}
          disabled={isButtonDisabled}
        >
          continue
        </button>
      </form>
    </>
  );
};

export default AboutUserForm;
