import AboutUserForm from "@/components/AboutUserForm";
import MedicalHistory from "@/components/MedicalHistory";
import Signup from "@/components/Signup";
import { AppContext } from "@/context/AppContext";
import { KYCContextProvider } from "@/context/KYC";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import Getstarted from "@/components/Getstarted";

const CreateReminder = () => {
  const { currentStep } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  const mapping = {
    getStarted: <Getstarted />,
    bio: <AboutUserForm />,
    medicals: <MedicalHistory />,
  };

  return (
    <>
      {!user && <Signup />}
      <div className="flex h-screen">
        <main className="mx-auto flex w-full flex-col justify-center gap-6 bg-zinc-50 px-3 lg:max-w-[50%]">
          {currentStep.id !== 0 && (
            <h3 className="text-xl font-semibold text-slate-500">{`Step ${currentStep.id}`}</h3>
          )}
          <h1 className="text-3xl font-bold text-green_light">
            {currentStep.about}
          </h1>
          <KYCContextProvider>{mapping[currentStep.page]}</KYCContextProvider>
        </main>
      </div>
    </>
  );
};

export default CreateReminder;
