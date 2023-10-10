import React from "react";
import Image from "next/image";
import { StateProvider, useStateProvider } from "@/context/StateContext";

function onboarding() {
  const [{ userInfo }] = useStateProvider();
  const [{ newUser }] = useStateProvider();
  console.log(userInfo);
  console.log(newUser);
  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src="/whatsapp.gif" alt="Whatsapp" height={300} width={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>
      <h2 className="text-7xl">Create Your Profile</h2>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col items-center justify-center mt-5 gap-6">
          {userInfo?.name}
        </div>
      </div>
      </div>
  )
}

export default onboarding;
