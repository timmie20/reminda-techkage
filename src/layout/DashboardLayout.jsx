import Navbar from "@/components/Dashboard/Navbar";
import Sidenav from "@/components/Dashboard/Sidenav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className=" sm:flex  h-screen w-full">
      <div className="sm:flex sm:w-[20%] hidden">
        <Sidenav />
      </div>
      <div className="flex sm:w-[80%] w-[100%] bg-gray-900 text-white p-4 overflow-y-auto">
        <Outlet />
      </div>
      <div className="flex sm:hidden bottom-0 ">
        <Navbar />
      </div>
    </div>
  );
};

export default DashboardLayout;