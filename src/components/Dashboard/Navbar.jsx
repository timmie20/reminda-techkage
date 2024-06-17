import React from "react";
import { CiUser } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { LuActivity } from "react-icons/lu";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const navItems = [
    { to: "/dashboard", icon: <IoHomeOutline />, label: "Overview" },
    { to: "/dashboard/profile", icon: <IoCreateOutline />, label: "Create" },
    { to: "/dashboard/shop", icon: <AiOutlineShopping />, label: "Shop" },
    { to: "/dashboard/activity", icon: <LuActivity />, label: "Activity" },
    { to: "/dashboard/profile", icon: <CiUser />, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 flex h-12 w-full items-center justify-around border-t border-gray-700 bg-gray-800 text-white">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className="flex  flex-col items-center justify-center text-center hover:text-[#429c57] hover:border-[#2c5836] hover:border rounded-full p-2"
        >
          <span className="text-xl">{item.icon}</span>
          {/* <span className="text-xs">{item.label}</span> */}
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
