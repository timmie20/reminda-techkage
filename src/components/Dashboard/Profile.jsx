

import React, { useContext} from "react";
import { FaUser } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import { AuthContext } from "@/context/AuthContext";
import useUserData from "@/context/UserData";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const userData = useUserData(user?.uid);

  return (
    <div className="lgl:p-[2rem] mdl:p-[2rem] sml:p-[2rem] flex min-h-[1200px] w-full flex-col gap-4 overflow-hidden p-[1rem] md:p-[2rem] lg:p-[2rem] xl:p-[2rem]">
      
      <div className="flex items-center justify-between py-2">
        <h1 className="text-lg font-bold">Profile</h1>
        <div className="right-0 float-right ml-auto flex">
          <FaUser size={20} />
        </div>
      </div>

      {userData ? (
        <div className="my-4 flex w-full flex-col gap-10 md:flex-row">
          <div className="color-white flex h-[17rem] flex-col bg-gray-800 p-4 text-lg font-bold md:w-[25%]">
            <div className="relative mb-6  overflow-hidden rounded-lg">
              <FaUser className="md:w-40 w-60 h-full" />
            </div>
            {`Hello ${userData.firstname}` || "Hi John Doe"}
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
                placeholder={userData.firstname}
                className="my-2 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
              />
              <label className="text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder={userData.email}
                className="my-2 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
              />
              <label className="text-sm">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder={userData.phone}
                className="my-2 rounded-lg border-2 border-[#2e374a] bg-gray-700 p-4 text-gray-400"
              />
              <div className="mt-6 flex items-center justify-between">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#1c1e23] px-6 py-2 text-gray-200"
                >
                  Save changes
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#ff4a4a] px-6 py-2 text-white"
                >
                  <FiEdit2 /> Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
          <div className="flex justify-center items-center">
            <p>User not found</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Profile;
  
  
 