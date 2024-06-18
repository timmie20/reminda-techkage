import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { IoCreateOutline } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";
import { BarChart } from "@mui/x-charts/BarChart";
<<<<<<< HEAD
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DosageRegistration from "@/components/DosageRegistration";
=======
>>>>>>> 82277cf (Fixed nav for dashboard mobile)

const Dashboard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const medicList = [
    {
      id: 1,
      name: "Antibiotics",
      intervals: "24hrs",
      time: "6:34",
      icon: <GrNext />,
    },
    {
      id: 2,
      name: "Analgesics",
      intervals: "12hrs",
      time: "6:34",
      icon: <GrNext />,
    },
    {
      id: 3,
      name: "Immune Booster",
      intervals: "6hrs",
      time: "6:34",
      icon: <GrNext />,
    },
  ];

  return (
    <div className="lgl:p-[2rem] mdl:p-[2rem] sml:p-[2rem] flex w-full flex-col gap-y-4 overflow-hidden p-[0.2rem] md:min-h-[1000px] md:p-[2rem] lg:p-[2rem] xl:p-[2rem]">
      <div className="flex items-center justify-between py-2">
        <h1 className="text-lg font-bold">Overview</h1>
        <div className="right-0 float-right ml-auto flex">
          <Link
            to="/dashboard/profile"
            className="text-gray-200 hover:text-gray-400"
          >
            <FaRegUser size={20} />
          </Link>
        </div>
      </div>

      <div className="mb-4 mt-4 flex flex-row items-center justify-between rounded-xl bg-gray-800 p-2 text-center sm:p-8">
        <h1 className="items-center justify-center text-center font-Poppins text-[18px] font-medium leading-snug text-gray-400 sm:text-[30px] md:text-left md:text-[45px]">
          Active TIMER -<span> 00:00</span>
        </h1>
        <IoTimeSharp size={40} className="text-gray-400" />
      </div>

      <div className="mt-2 flex flex-col gap-4 md:mt-6">
        <div className="flex items-center justify-between py-2 sm:py-5">
          <h1 className="text-sm md:text-base">Your medications</h1>
<<<<<<< HEAD
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
=======
          <Link to="/dashboard/medication">
            <div className="flex flex-row justify-center">
>>>>>>> 82277cf (Fixed nav for dashboard mobile)
              <button className="300 flex transform flex-row rounded-xl bg-[#2c5836] px-2 py-3 text-xs transition ease-in hover:scale-90 md:px-3 md:py-4 md:text-base">
                Add medication{" "}
                <IoCreateOutline className="ml-[0.5px] mt-[0.5px] text-white md:ml-1 md:mt-1" />
              </button>
            </DialogTrigger>
            <DialogContent>
              <DosageRegistration callBackFun={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="lgl:gap-4 mdl:gap-4 sml:gap-3 grid cursor-pointer grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:gap-4 xl:gap-4">
          {medicList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-md bg-gray-800 p-3 py-6 shadow-md sm:p-3 lg:p-6 xl:p-6"
<<<<<<< HEAD
              // activeClassName="bg-gray-700"
=======
              activeClassName="bg-gray-700"
>>>>>>> 82277cf (Fixed nav for dashboard mobile)
            >
              <div className="gap-y-4">
                <div className="lgl:text-2xl mdl:text-2xl sml:text-xl text-purple text-base font-bold sm:text-base md:text-2xl lg:text-2xl xl:text-2xl">
                  {item.intervals}
                </div>
                <div className="text-sm text-gray-500">{item.name}</div>
                <div>{item.time}</div>
              </div>

              <div className="lgl:text-3xl mdl:text-2xl sml:text-xl text-xl text-gray-500 hover:text-gray-300 md:text-2xl lg:text-3xl xl:text-3xl">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-4 flex flex-row md:my-8">
        <BarChart
          series={[
            { data: [3, 4, 1, 6, 5], stack: "A", label: "Series A1" },
            { data: [4, 3, 1, 5, 8], stack: "A", label: "Series A2" },
            { data: [4, 2, 5, 4, 1], stack: "B", label: "Series B1" },
            { data: [2, 8, 1, 3, 1], stack: "B", label: "Series B2" },
            { data: [10, 6, 5, 8, 9], label: "Series C1" },
          ]}
          width={600}
          height={350}
        />
      </div>
    </div>
  );
};

export default Dashboard;
