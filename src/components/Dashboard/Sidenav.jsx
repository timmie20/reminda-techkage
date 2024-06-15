import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
// import { SlCalender } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Sidenav = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navItems = [
    { name: "Overview", icon: <GrOverview /> },
    { name: "Profile", icon: <CiUser /> },
    { name: "Medication", icon: <GiMedicines /> },
    { name: "Create", icon: <SlEnergy /> },
    // { name: "Timer", icon: <MdOutlineTimer /> },
    // { name: "Overview", icon: <GrOverview /> },
    { name: "Shop", icon: <SlEnergy /> },
    { name: "Activity", icon: <SlEnergy /> },
    { name: "Settings", icon: <IoSettingsOutline /> },
  ];

  const handleLogoutClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="fixed flex h-full w-1/5 flex-col bg-gray-800 md:pt-8 pt-6 text-center text-white">
      <div className="flex items-center justify-center text-center">
        <h3 className="md:mb-8 mb-4 p-2 md:pt-8 pt-4 font-Poppins text-xl font-bold text-gray-500 md:text-3xl">
          h<span className="text-green_light">REMIND</span>
        </h3>
      </div>
      <nav className="flex flex-col ">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={`/dashboard/${item.name.toLowerCase()}`}
            className="md:ml-4 ml-[1/2] flex items-center rounded px-4 text-sm md:text-base py-2 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            <span className="md:mr-3 mr-2">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
        <button
          onClick={handleLogoutClick}
          className="md:ml-4 ml-[1/2] flex  items-center rounded px-4 py-2 text-sm md:text-base text-left hover:bg-gray-700"
        >
          <span className="md:mr-3 mr-2">
            <FiLogOut />
          </span>
          Log out
        </button>
      </nav>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center justify-center text-center">
              <h3 className="mb-4 p-2 pt-4 font-Poppins text-xl font-bold text-gray-500 md:text-3xl">
                h<span className="text-green_light">REMIND</span>
              </h3>
            </div>
            <DialogTitle className="my-2 justify-center text-center">
              Log out
            </DialogTitle>
            <DialogDescription className="my-2 justify-center pt-2 text-center">
              Are you sure you want to log out?
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex flex-row justify-center gap-4">
            <button className="300 flex transform flex-row rounded-full bg-[#2c5836] px-10 py-2 text-white transition ease-in hover:scale-90">
              Confirm
            </button>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="300 flex transform flex-row rounded-full border border-[#2c5836] px-10 py-2 text-[#2c5836] transition ease-in hover:scale-90"
            >
              Go back
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sidenav;
