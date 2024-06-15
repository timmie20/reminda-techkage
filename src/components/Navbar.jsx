import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 w-full bg-white px-3">
        <nav className="mx-auto flex h-fit max-w-[1024px] items-center justify-between border-b-[1px] border-green_dark py-5">
          <h3 className="font-Poppins text-xl font-bold text-gray-500 md:text-3xl">
            reminda
          </h3>
          <div className="hidden items-center gap-6 font-Inter text-sm font-medium text-gray-600 md:flex">
            <Link to="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link to="/about" className={pathname === "/about" ? "active" : ""}>
              About reminda
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
            <Link
              to="/create"
              className="h-fit rounded-sm bg-green_dark px-4 py-2 text-white"
            >
              Let's get Started
            </Link>
          </div>

          {isOpen ? (
            <MobileNavMenu
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              pathname={pathname}
            />
          ) : (
            <IoMdMenu
              size={30}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            />
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
