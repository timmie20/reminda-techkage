import React, { useContext } from "react";
import { FaRegSmileWink, FaArrowRight } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { Button } from "./ui/button";
import { AppContext } from "@/context/AppContext";

const Getstarted = () => {
  const { setCurrentStep, stepData } = useContext(AppContext);
  return (
    <>
      <div>
        <h1 className="text-2xl font-medium leading-normal md:text-[36px]">
          hello,
          <span>
            <FaRegSmileWink color="#84a98c" />
          </span>
          to continue with your account let's get to know you. The next few
          steps would help us personalized your account, about 2 mins max{" "}
          <AiFillLike />
        </h1>
        <Button
          className="mt-4 inline-flex items-center gap-2 bg-green_dark text-base"
          onClick={() => setCurrentStep(stepData[1])}
        >
          Continue
          <FaArrowRight />
        </Button>
      </div>
    </>
  );
};

export default Getstarted;
