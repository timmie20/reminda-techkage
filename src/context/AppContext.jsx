import { getData } from "@/Helper/data";
import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [dosageList, setDosageList] = useState([]);
  const { user } = useContext(AuthContext);
  const [stepData, setStepData] = useState(getData()?.stepData);
  const [currentStep, setCurrentStep] = useState(stepData[0]);
  const [currentPreview, setCurrentPreview] = useState(null);
  const [active, setActive] = useState(null);

  const getDosageList = async () => {
    const dosageData = [];
    try {
      const querySnapshot = await getDocs(collection(db, "dosage"));
      querySnapshot.forEach((doc) => {
        dosageData.push(doc.data());
      });

      const filteredDosage = dosageData.filter(
        (dosage) => dosage?.userId === user?.uid,
      );
      setDosageList(filteredDosage);

      // Set initial values only after data is fetched
      if (filteredDosage.length > 0) {
        setCurrentPreview(filteredDosage[0]);
        setActive(filteredDosage[0].dosageId);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <AppContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        setStepData,
        stepData,
        getDosageList,
        dosageList,
        currentPreview,
        active,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
