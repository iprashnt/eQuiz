import React from "react";

// ICONS
import { FaRegBell } from "react-icons/fa6";

const Notification = ({ size = 28, color = "black" }) => {
  return (
    <div className="relative h-auto cursor-pointer">
      <FaRegBell size={size} color={color} />

      <div className="absolute inset-0 left-3 -top-1">
        <div className="w-4 h-4 rounded-full bg-[#ee3839] text-white flex justify-center items-center text-xs">
          3
        </div>
      </div>
    </div>
  );
};

export default Notification;
