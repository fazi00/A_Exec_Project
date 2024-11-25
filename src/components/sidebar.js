"use client";

import {
  Flag,
  CalendarSearch,
  MessageCircle,
  UserRoundSearch,
  CircleUser,
  LogOut,
  BellDot,
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState("Browse Events");
  const [message, setMessage] = useState(1);

  // Define navigation items
  const navItems = [
    { id: "Browse Events", icon: Flag },
    { id: "My Events", icon: CalendarSearch },
    { id: "Messages", icon: MessageCircle, showBadge: true },
    { id: "My Points", icon: UserRoundSearch },
    { id: "My Profile", icon: CircleUser },
  ];

  return (
    <aside className="w-[250px] bg-gray-200 h-screen p-4 flex flex-col justify-between relative">
      <div>
        {/* Logo/Header */}
        <div className="font-bold text-xl mb-6 text-purple-600 flex items-center justify-between">
          Bridle
          <div
            className="ml-auto bg-white rounded-full text-black
                     w-10 h-10 flex items-center justify-center"
          >
            <BellDot />
          </div>
        </div>

        {/* Navigation Items */}
        <nav>
          <ul className="space-y-2 relative">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isSelected = selected === item.id;
              return (
                <li
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  className={`flex items-center gap-3 cursor-pointer rounded-lg px-4 py-3 transition relative ${
                    isSelected
                      ? "bg-white shadow text-black font-bold"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  {/* Pointer/Indicator */}
                  {isSelected && (
                    <div className="absolute inset-y-2 left-[-15px] w-1 h-6 bg-purple-600 rounded-r-full"></div>
                  )}
                  {/* Icon */}
                  <Icon
                    size={20}
                    className={`${
                      isSelected ? "text-purple-600" : "text-gray-400"
                    }`}
                  />
                  {/* Text */}
                  <span>{item.id}</span>
                  {/* Notification Badge for Messages */}
                  {item.showBadge && message > 0 && (
                    <div
                      className="ml-auto bg-red-600 text-white text-xs font-bold rounded-full
                     w-6 h-6 flex items-center justify-center"
                    >
                      {message}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Sign Out Button */}
      <button className="flex items-center gap-2 text-gray-500 hover:text-gray-800">
        <LogOut size={20} />
        Sign Out
      </button>
    </aside>
  );
};

export default Sidebar;
