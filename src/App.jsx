import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Routes>{/* <Route path="" element={<Signup />} /> */}</Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
