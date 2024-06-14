import { getData } from "/data";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [stepData, setStepData] = useState(getData()?.stepData);
  const [currentStep, setCurrentStep] = useState(stepData[0]);
  return (
    <AppContext.Provider
      value={{ currentStep, setCurrentStep, setStepData, stepData }}
    >
      {children}
    </AppContext.Provider>
  );
};