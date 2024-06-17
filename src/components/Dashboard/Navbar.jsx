import React from 'react';
import { CiUser } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { LuActivity } from "react-icons/lu";
import { Link } from 'react-router-dom';

const BottomNav = () => {
  const navItems = [
    { to: "/", icon: <IoHomeOutline />, label: "Overview" },
    { to: "/profile", icon: <IoCreateOutline />, label: "Create" },
    { to: "/notifications", icon: <AiOutlineShopping />, label: "Shop" },
    { to: "/stats", icon: <LuActivity />, label: "Activity" },
    { to: "/profile", icon: <CiUser />, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-around items-center h-16 border-t border-gray-700">
      {navItems.map((item, index) => (
        <Link key={index} to={item.to} className="flex flex-col items-center justify-center text-center w-full hover:bg-gray-700">
          <span className="text-2xl">{item.icon}</span>
          {/* <span className="text-xs">{item.label}</span> */}
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
