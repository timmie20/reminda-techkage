import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { GrOverview } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { LuActivity } from "react-icons/lu";

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
    { name: "Create", icon: <IoCreateOutline /> },
    { name: "Shop", icon: <AiOutlineShopping /> },
    { name: "Activity", icon: <LuActivity /> },
    { name: "Profile", icon: <CiUser /> },
  ];

  const handleLogoutClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="fixed hidden h-full w-1/5 flex-col bg-gray-800 pt-6 text-center text-white md:pt-8 lg:flex">
      <div className="flex items-center justify-center text-center">
        <h3 className="mb-4 p-2 pt-4 font-Poppins text-xl font-bold text-gray-500 md:mb-8 md:pt-8 md:text-3xl">
          h<span className="text-green_light">REMIND</span>
        </h3>
      </div>
      <nav className="flex flex-col">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={`/dashboard/${item.name.toLowerCase()}`}
            className="ml-[1/2] flex items-center rounded px-4 py-2 text-sm hover:bg-gray-700 md:ml-4 md:text-base"
            activeClassName="bg-gray-700"
          >
            <span className="mr-2 md:mr-3">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
        <button
          onClick={handleLogoutClick}
          className="ml-[1/2] flex items-center rounded px-4 py-2 text-left text-sm hover:bg-gray-700 md:ml-4 md:text-base"
        >
          <span className="mr-2 md:mr-3">
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
