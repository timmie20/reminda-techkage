import React, { useState } from 'react';
import { FaUser } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog";





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
        emergencyContact: "Jane Doe - 987-654-3210"
      });

   

  return (
    <div className="flex  flex-col gap-4 w-full min-h-[1600px] overflow-hidden xl:p-[2rem] lg:p-[2rem] lgl:p-[2rem] mdl:p-[2rem] md:p-[2rem] sml:p-[2rem] p-[1rem]">
        {/* <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog> */}
     <div className="flex items-center justify-between py-2">
      <h1 className="font-bold text-lg">Profile</h1>
      <div className="ml-auto flex float-right right-0">
        <FaUser size={20} />
      </div>
    </div>

    <div className="flex w-full gap-10 mt-4">
    <div className="flex w-[25%] bg-gray-800 p-4 font-bold color-white h-[17rem] text-lg flex-col">
      <div className="w-full h-full relative rounded-lg overflow-hidden mb-6">
        <FaUser size={200} />
      </div>
      {`Hello ${user.username}` || "Hi John Doe"}

    </div>

    <div className="w-[75%] bg-gray-800 p-4 rounded-lg">
          <form className="flex flex-col">
            <input type="hidden" name="id" value="name" className='p-2 rounded-lg border-2 bg-gray-700 border-[#2e374a] text-gray-800 my-2' />
            <label className='text-sm'>Username</label>
            <input type="text" name="username" placeholder={user.username} className='p-4 rounded-lg border-2 bg-gray-700 border-[#2e374a] text-gray-400 my-2' />
            <label className='text-sm'>Email</label>
            <input type="email" name="email" placeholder={user.email} className='p-4 rounded-lg border-2 bg-gray-700 border-[#2e374a] text-gray-400 my-2' />
            <label className='text-sm'>Phone</label>
            <input type="text" name="phone" placeholder={user.phone} className='p-4 rounded-lg border-2 bg-gray-700 border-[#2e374a] text-gray-400 my-3' />
            <label className='text-sm'>Height</label>
            <input type="text" name="height" placeholder={user.height} className='p-4 rounded-lg border-2 bg-gray-700 border-[#2e374a] text-gray-400 my-3' />
            <label className='text-sm'>Weight</label>
            <input type="text" name="weight" placeholder={user.weight} className='p-4 rounded-lg border-2 bg-gray-700 border-[#2e374a] text-gray-400 my-3' />
            <label className='text-sm'>Gender</label>
            <select name="gender" className='p-4 rounded-lg border-2 bg-gray-700 border-[#2e374a] text-gray-400 my-3'>
              <option value="Male" selected={user.gender === "Male"}>Male</option>
              <option value="Female" selected={user.gender === "Female"}>Female</option>
              <option value="Other" selected={user.gender === "Other"}>Other</option>
            </select>
            <label className='text-sm'>Date of Birth</label>
            <input type="date" name="dateOfBirth" value={user.dateOfBirth} className='p-4 rounded-lg border-2 bg-gray-700 border-[#2e374a] text-gray-400 my-3' />
            <label className='text-sm'>Activity Level</label>
            <select name="activityLevel" className='p-4 rounded-lg border-2 bg-gray-700 border-[#2e374a] text-gray-400 my-3'>
              <option value="Sedentary" selected={user.activityLevel === "Sedentary"}>Sedentary</option>
              <option value="Active" selected={user.activityLevel === "Active"}>Active</option>
              <option value="Very Active" selected={user.activityLevel === "Very Active"}>Very Active</option>
            </select>
            <label className='text-sm'>Medical Conditions</label>
            <textarea name="medicalConditions" placeholder={user.medicalConditions} className='p-4 rounded-lg border-2 bg-gray-700 border-[#2e374a] text-gray-400 my-3' />
            <label className='text-sm'>Allergies</label>
            <textarea name="allergies" placeholder={user.allergies} className='p-4 rounded-lg border-2 bg-gray-700 border-[#2e374a] text-gray-400 my-3' />
            <label className='text-sm'>Emergency Contact</label>
            <textarea name="emergencyContact" placeholder={user.emergencyContact} className='p-4 rounded-lg border-2 bg-gray-700 border-[#2e374a] text-gray-400 my-3' />
            <button className='w-full p-3 bg-[#2c5836] text-gray-300 rounded-lg cursor-pointer justify-center text-center  mt-4 font-bold flex flex-row transform hover:scale-95 transition ease-in 300'>Edit <FiEdit2 className='ml-1 mt-1' size={15}/></button>
          </form>
        </div>
  </div>
    </div>
  )
}

export default Profile;