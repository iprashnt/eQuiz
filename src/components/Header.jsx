import React from "react";

// COMPONENTS
import NotificationIcon from "@/components/Notification";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="w-full bg-[#e8f3f9]">
      <header className="container mx-auto py-3 px-8">
        <div className="mx-auto flex flex-row sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            Logo
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
            <NotificationIcon size={24} color="#133fa6" />
            <Avatar imageUrl="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
