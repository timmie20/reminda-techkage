import { createContext, useState } from "react";

export const KYCContext = createContext(null);

export const KYCContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  return (
    <KYCContext.Provider value={{ data, setData }}>
      {children}
    </KYCContext.Provider>
  );
};
