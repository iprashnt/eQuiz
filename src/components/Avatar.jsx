import Image from "next/image";
import React from "react";

const Avatar = ({
  className = "",
  imageUrl = "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
}) => {
  return (
    <Image
      width={10}
      height={10}
      className={`w-10 h-10 rounded-full ${className}`}
      src={imageUrl}
      alt="Rounded avatar"
    />
  );
};

export default Avatar;
