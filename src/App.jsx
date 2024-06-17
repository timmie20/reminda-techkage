import { Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { AuthContextProvider } from "./context/AuthContext";
import AppLayout from "./layout/AppLayout";
import CreateReminder from "./pages/CreateReminder";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import Profile from "./components/Dashboard/Profile";

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
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard/profile" element={<Profile />} />
            </Route>
          </Routes>
        </AppContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
