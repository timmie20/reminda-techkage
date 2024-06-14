import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ pathname, setIsOpen }) => {
  return (
    <>
      <div className="fixed right-0 top-5 z-20 flex h-screen w-[50%] max-w-[300px] flex-col items-end gap-10 bg-white px-2 lg:hidden">
        <IoMdClose size={30} onClick={() => setIsOpen(false)} />
        <div className="flex flex-col gap-4 pr-5 text-right font-Inter text-sm font-medium text-gray-600">
          <Link to="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/about" className={pathname === "/about" ? "active" : ""}>
            About hREMIND
          </Link>
          <Link
            to="/howitworks"
            className={pathname === "/howitworks" ? "active" : ""}
          >
            How it works
          </Link>
          <Link
            to="/support"
            className={pathname === "/support" ? "active" : ""}
          >
            Contact support
          </Link>

          <Link to="/create" className="primary_btn">
            Let's Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNavMenu;
