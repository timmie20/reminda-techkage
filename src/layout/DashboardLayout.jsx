import DashboardMobileNav from "@/components/Dashboard/DashboardMobileNav";
import Sidenav from "@/components/Dashboard/Sidenav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="lg:w-[20%]">
          <Sidenav />
        </div>
        <div className="w-full overflow-y-auto bg-gray-900 p-4 text-white lg:w-[80%]">
          <Outlet />
        </div>
      </div>
      <DashboardMobileNav />
    </>
  );
};

export default DashboardLayout;
