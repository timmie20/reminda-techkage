import Sidenav from "@/components/Dashboard/Sidenav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className=" flex h-screen w-full">
      <div className="flex w-[20%]">
        <Sidenav />
      </div>
      <div className="flex w-[80%] bg-gray-900 text-white p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;