import AboutUserForm from "@/components/AboutUserForm";
import DosageRegistration from "@/components/DosageRegistration";
import MedicalHistory from "@/components/MedicalHistory";
import SideContent from "@/components/SideContent";
import { AppContext } from "@/context/AppContext";
import { KYCContextProvider } from "@/context/KYC";
import { useContext } from "react";

const CreateReminder = () => {
  const { currentStep } = useContext(AppContext);
  const mapping = {
    bio: <AboutUserForm />,
    medicals: <MedicalHistory />,
    dosage: <DosageRegistration />,
  };
  return (
    <>
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
