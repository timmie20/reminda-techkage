import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";


const Profile = () => {
  const [user, setUser] = useState({
    img: null,
    username: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    height: "163 cm",
    weight: "70 kg",
    gender: "Male",
    dateOfBirth: "1990-01-01",
    activityLevel: "Active",
    medicalConditions: "Bacteria infection, Lower Abdominal Pain",
    allergies: "pineapples, soybeans, ginger",
    emergencyContact: "Jane Doe - 987-654-3210",
  });

  return (
    <div className="lgl:p-[2rem] mdl:p-[2rem] sml:p-[2rem] flex min-h-[1600px] w-full flex-col gap-4 overflow-hidden p-[1rem] md:p-[2rem] lg:p-[2rem] xl:p-[2rem]">
      
      <div className="flex items-center justify-between py-2">
        <h1 className="text-lg font-bold">Profile</h1>
        <div className="right-0 float-right ml-auto flex">
          <FaUser size={20} />
        </div>
      </div>

      <div className="my-4 flex w-full flex-col gap-10 md:flex-row">
        <div className="color-white flex h-[17rem] flex-col bg-gray-800 p-4 text-lg font-bold md:w-[25%]">
          <div className="relative mb-6  overflow-hidden rounded-lg">
            <FaUser 
            className="md:w-40 w-60 h-full" />
          </div>
          {`Hello ${user.username}` || "Hi John Doe"}
        </div>

        <div className="w-full rounded-lg bg-gray-800 p-4 md:w-[75%]">
          <form className="flex flex-col">
            <input
              type="hidden"
              name="id"
              value="name"
              className="my-2 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-2 text-gray-800"
            />
            <label className="text-sm">Username</label>
            <input
              type="text"
              name="username"
              placeholder={user.username}
              className="my-2 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
            />
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              placeholder={user.email}
              className="my-2 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
            />
            <label className="text-sm">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder={user.phone}
              className="my-3 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
            />
            <label className="text-sm">Height</label>
            <input
              type="text"
              name="height"
              placeholder={user.height}
              className="my-3 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
            />
            <label className="text-sm">Weight</label>
            <input
              type="text"
              name="weight"
              placeholder={user.weight}
              className="my-3 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
            />
            <label className="text-sm">Gender</label>
            <select
              name="gender"
              className="my-3 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
            >
              <option value="Male" selected={user.gender === "Male"}>
                Male
              </option>
              <option value="Female" selected={user.gender === "Female"}>
                Female
              </option>
              <option value="Other" selected={user.gender === "Other"}>
                Other
              </option>
            </select>
            <label className="text-sm">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={user.dateOfBirth}
              className="my-3 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
            />
            <label className="text-sm">Activity Level</label>
            <select
              name="activityLevel"
              className="my-3 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
            >
              <option
                value="Sedentary"
                selected={user.activityLevel === "Sedentary"}
              >
                Sedentary
              </option>
              <option value="Active" selected={user.activityLevel === "Active"}>
                Active
              </option>
              <option
                value="Very Active"
                selected={user.activityLevel === "Very Active"}
              >
                Very Active
              </option>
            </select>
            <label className="text-sm">Medical Conditions</label>
            <textarea
              name="medicalConditions"
              placeholder={user.medicalConditions}
              className="my-3 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
            />
            <label className="text-sm">Allergies</label>
            <textarea
              name="allergies"
              placeholder={user.allergies}
              className="my-3 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
            />
            <label className="text-sm">Emergency Contact</label>
            <textarea
              name="emergencyContact"
              placeholder={user.emergencyContact}
              className="my-3 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
            />
            <button className="300 mt-4 flex w-full transform cursor-pointer flex-row justify-center rounded-lg bg-[#2c5836] p-3 text-center font-bold text-gray-300 transition ease-in hover:scale-95">
              Edit <FiEdit2 className="ml-1 mt-1" size={15} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
