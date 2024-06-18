import React from "react";
import { TiUser } from "react-icons/ti";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { LuActivity } from "react-icons/lu";
import { Link } from "react-router-dom";

const DashboardMobileNav = () => {
  const navItems = [
    { to: "/dashboard", icon: <IoHomeOutline />, label: "Overview" },
    { to: "/dashboard/shop", icon: <AiOutlineShopping />, label: "Shop" },
    { to: "/dashboard/activity", icon: <LuActivity />, label: "Activity" },
    { to: "/dashboard/profile", icon: <TiUser />, label: "Profile" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-3 z-20 mx-auto flex h-fit w-[90%] max-w-[400px] items-center rounded-md border-[1px] border-white/10 bg-gray-800/70 py-2 text-white opacity-90 shadow-2xl backdrop-blur-lg lg:hidden">
      <div className="flex w-full justify-around">
        {navItems.map((item, index) => (
          <Link key={index} to={item.to}>
            <span className="text-[24px]">{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardMobileNav;
