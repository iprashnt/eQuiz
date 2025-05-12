import React from "react";

// ICONS
import { MdGroups } from "react-icons/md";
import { FaGraduationCap, FaMedal } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const leaderboardData = [
  {
    rank: 1,
    Icon: {
      Icon: FaMedal,
      color: "#ffda2f",
    },
    employee: "Sarah Chen",
    department: "Investment Banking",
    points: 15420,
  },
  {
    rank: 2,
    Icon: {
      Icon: FaMedal,
      color: "#c0c0c0",
    },
    employee: "Michael Smith",
    department: "Risk Management",
    points: 14890,
  },
  {
    rank: 3,
    Icon: {
      Icon: FaMedal,
      color: "#ca7925",
    },
    employee: "Emma Wilson",
    department: "Asset Management",
    points: 13750,
  },
  {
    rank: 4,
    employee: "David Brown",
    department: "Securities",
    points: 12980,
  },
  {
    rank: 5,
    employee: "Lisa Zhang",
    department: "Consumer Banking",
    points: 12450,
  },
];

const LeaderBoard = () => {
  return (
    <>
      {/* HEADING */}
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#002e9e] mt-6 sm:mt-8 lg:mt-10">
          Learning Leaderboard
        </h3>
        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#646464] mt-3 sm:mt-4 lg:mt-5">
          Top performers in corporate learning initiatives
        </h4>
      </div>

      {/* CARD */}
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <Card title="Total Participants" total={2547} Icon={MdGroups} />
          <Card
            title="Courses Completed"
            total={12890}
            Icon={FaGraduationCap}
          />
          <Card title="Total Points" total={458720} Icon={FaStar} />
        </div>
      </div>

      {/* TABLE */}
      <div className="mt-15">
        <div className="max-w-full mx-auto">
          <div className="overflow-x-auto rounded-xl border-2 border-[#eff7fd] shadow-lg bg-white">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr className="bg-white text-[#002e9e] text-xs sm:text-sm md:text-base font-bold">
                  <th className="py-3 px-3 sm:px-4 pt-6">Rank</th>
                  <th className="py-3 px-3 sm:px-4 pt-6">Employee</th>
                  <th className="py-3 px-3 sm:px-4 pt-6">Department</th>
                  <th className="py-3 px-3 sm:px-4 pt-6 text-right">Points</th>
                </tr>
                <tr>
                  <td colSpan={4} className="p-0">
                    <div className="mx-auto w-[95%] border-b-2 border-[#eff7fd]"></div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((entry, index) => (
                  <React.Fragment key={index}>
                    <tr className="hover:bg-gray-50 text-xs sm:text-sm md:text-base transition-colors duration-200">
                      <td className="py-3 px-3 sm:px-4 flex items-center space-x-2">
                        {entry?.Icon ? (
                          <entry.Icon.Icon color={entry.Icon.color} />
                        ) : (
                          <span className="font-semibold lg:w-4 md:w-4 w-3"></span>
                        )}
                        <span className="font-semibold">{entry.rank}</span>
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-semibold">
                        {entry.employee}
                      </td>
                      <td className="py-3 px-3 sm:px-4 font-semibold">
                        {entry.department}
                      </td>
                      <td className="py-3 px-3 sm:px-4 text-right text-[#002e9e] font-semibold">
                        {entry.points.toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="p-0">
                        <div className="mx-auto w-[95%] border-b-2 border-[#eff7fd]"></div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;

const Card = ({ title = "Title", Icon = MdGroups, total = 12345 }) => {
  return (
    <div className="flex justify-between items-center p-4 sm:p-5 gap-4 w-full max-w-sm min-h-[100px] bg-white border-2 border-[#e2f1fc] rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-200">
      <div className="flex-1">
        <h6 className="text-xs sm:text-sm font-semibold text-[#646464] truncate mb-1">
          {title}
        </h6>
        <span className="font-bold text-lg sm:text-2xl text-[#002e9e] truncate">
          {total?.toLocaleString()}
        </span>
      </div>
      <div className="flex-shrink-0">
        <Icon size={32} className="sm:size-[38px]" color="#002e9e" />
      </div>
    </div>
  );
};
