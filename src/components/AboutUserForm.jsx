import { AppContext } from "@/context/AppContext";
import { useCallback, useContext, useMemo, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import AgeCalculator from "./AgeCalculator";
import GenderSelect from "./GenderSelect";
import { getAgeValue } from "@/Helper/utils";
import { KYCContext } from "@/context/KYC";
import { Button } from "./ui/button";

const AboutUserForm = () => {
  const { setCurrentStep, stepData } = useContext(AppContext);
  const { data, setData } = useContext(KYCContext);
  const [age, setAge] = useState("");

  const [formData, setFormData] = useState({
    firstname: data.firstname || "",
    lastname: data.lastname || "",
    age: data.age || "",
    mobile: data.mobile || "",
    gender: data.gender || "",
  });

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
    const { firstname, lastname, age, mobile, gender } = formData;
    return (
      firstname !== "" &&
      lastname !== "" &&
      age !== "" &&
      mobile !== "" &&
      gender !== ""
    );
  }, [formData]);

  // Enable or disable button based on form validation
  const isButtonDisabled = useMemo(() => {
    return !validateForm();
  }, [validateForm]);

  const handleNextAction = () => {
    const isFormValid = validateForm();

    if (isFormValid) {
      setData((allObj) => ({
        ...allObj,
        formData,
      }));
      setCurrentStep(stepData[2]);
    }
    // TODO: Else Handle invalid form submission FOR FEEDBACK
  };

  return (
    <>
      <form className="w-full">
        <div className="space-y-2">
          <Label htmlFor="firstname">Firstname</Label>
          <Input
            type="text"
            id="firstname"
            name="firstname"
            value={formData["firstname"]}
            onChange={handleOnChange}
          />
        </div>
        <div className="mt-3 space-y-2">
          <Label htmlFor="lastname">Lastname</Label>
          <Input
            type="text"
            id="lastname"
            name="lastname"
            value={formData["lastname"]}
            onChange={handleOnChange}
          />
        </div>

        <AgeCalculator name="age" value={age} handleChange={handleOnChange} />

        <div className="mt-3 space-y-2">
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input
            id="mobile"
            name="mobile"
            type="number"
            value={formData["mobile"]}
            onChange={handleOnChange}
          />
        </div>

        <div className="mt-3 space-y-2">
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
        <Button
          className="primary_btn mt-8"
          type="button"
          onClick={handleNextAction}
          disabled={isButtonDisabled}
        >
          continue
        </Button>
      </form>
    </>
  );
};

export default AboutUserForm;
