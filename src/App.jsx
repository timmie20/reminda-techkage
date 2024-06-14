import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
