import React from "react";
import docsSvg from "../assets/doc.svg";
import docsImage from "../assets/image.jpg";
import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <main className="mx-auto max-w-[1024px] px-3 font-Poppins">
        <div className="mt-3 flex flex-col gap-5 py-5 md:mt-9">
          <p className="inline-flex items-center gap-2 text-center text-sm font-semibold leading-none text-green_light md:text-base">
            POWERED BY AI
            <FaRobot size={22} />
          </p>
          <h1 className="text-center text-[32px] font-medium leading-snug md:text-left md:text-[65px]">
            Let us help you
            <span className="font-bold text-green_light"> remember</span> and
            stay consistent on your meds
          </h1>
          <img src={docsSvg} />
        </div>

        <h3 className="text-center text-[24px] font-semibold md:text-[32px]">
          Our Ai-powered system gives you an overview of your current condition
          when you create a dosage reminder
        </h3>

        <div className="my-10 flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-0">
          <div className="w-full lg:w-[45%]">
            <img
              src={docsImage}
              alt="image of a female doctor"
              className="rounded-[20px]"
            />
          </div>
          <div className="flex w-full flex-col gap-6 text-center lg:w-1/2 lg:items-end lg:text-left">
            <h3 className="flex flex-col text-xl">
              Are you worried about missing a dose or taking the wrong one? If
              so, you're not alone. Millions of people face challenges in
              managing their medications{" "}
              <span className="font-semibold text-green_light">
                efficiently.
              </span>
            </h3>
            <h3 className="text-lg">
              Disclaimer:{" "}
              <span className="font-semibold text-green_light">remida</span> is
              intended for informational purposes only and should not be a
              substitute for professional medical advice. Always consult with
              your doctor or pharmacist before making any changes to your
              medication regimen.
            </h3>
            <Link
              className="w-full rounded-md bg-green_dark px-7 py-2 text-center font-Inter font-bold text-white md:block"
              to="/create"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
