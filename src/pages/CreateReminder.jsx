import AboutUserForm from "@/components/AboutUserForm";
import MedicalHistory from "@/components/MedicalHistory";
import SideContent from "@/components/SideContent";
import Signup from "@/components/Signup";
import { AppContext } from "@/context/AppContext";
import { KYCContextProvider } from "@/context/KYC";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const CreateReminder = () => {
  const { currentStep } = useContext(AppContext);
  const { user } = useContext(AuthContext);

  const mapping = {
    bio: <AboutUserForm />,
    medicals: <MedicalHistory />,
  };

  return (
    <>
      {!user && <Signup />}
      <div className="flex h-screen">
        <SideContent />
        <main className="mx-auto flex w-full max-w-[50%] flex-col justify-center gap-6 p-8">
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
