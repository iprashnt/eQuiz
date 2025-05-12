import React from "react";

const Card = ({
  pillBgColor = "#fee2e1",
  pillTextColor = "#da181a",
  pillText = "Pill Text",
  cardImage = "https://flowbite.com/docs/images/blog/image-1.jpg",
  cardTitle = "Title",
  cardDescription = "Description",
  cardDate = "May 30, 2025",
  cardProgress = 25,
}) => {
  return (
    <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-xs min-h-[28rem] max-h-[28rem] overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300">
      {/* Image and Badge */}
      <div className="relative">
        <img
          className="w-full object-cover rounded-t-2xl"
          src={cardImage}
          alt="card image"
        />
        <div
          style={{ backgroundColor: pillBgColor }}
          className="absolute w-auto px-3 py-1.5 shadow right-2 top-2 rounded-full flex items-center truncate"
        >
          <span
            style={{ color: pillTextColor }}
            className="text-xs font-bold truncate"
          >
            {pillText}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 mt-5 mb-5">
        <h5 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#002e9e] line-clamp-2">
          {cardTitle}
        </h5>
        <p className="text-sm sm:text-base text-[#646464] font-semibold line-clamp-2 mt-4">
          {cardDescription}
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 mt-8">
        <div className="flex justify-between items-center text-sm text-[#0033a0] font-semibold">
          <span>Due: {cardDate}</span>
          <span>{cardProgress}%</span>
        </div>
        <div className="mt-2">
          <div className="w-full h-2 bg-[#e8f3f9] rounded-full">
            <div
              style={{ width: `${cardProgress}%` }}
              className="h-2 bg-[#0133a0] rounded-full transition-all duration-300"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
