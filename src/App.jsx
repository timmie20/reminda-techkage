import { Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { AuthContextProvider } from "./context/AuthContext";
import AppLayout from "./layout/AppLayout";
import CreateReminder from "./pages/CreateReminder";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <AppContextProvider>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/create" element={<CreateReminder />} />
          </Routes>
        </AppContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
