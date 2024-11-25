"use client";
import { useState } from "react";
import {
  Bookmark,
  Target,
  CalendarCheck2,
  Calendar,
  Search,
  ChevronDown,
} from "lucide-react";
import events from "@/data/events.json";
import Image from "next/image";

const EventFeature = () => {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <section className="px-8 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Events</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((events) => (
          <div
            key={events.id}
            className="relative bg-white border border-gray-300 rounded-lg shadow-md flex"
          >
            {/* Image */}
            <div className="flex-shrink-0 w-1/3">
              <Image
                src={events.image}
                alt={events.title}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>

            {/* Text Content */}
            <div className="p-4 w-3/4">
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                {events.title}
              </h3>

              {/* Bull Ring Icon and Text */}
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Target className="mr-2" size={20} />
                Bull Ring
              </div>

              {/* Calendar Icon and Date */}
              <div className="flex items-center text-sm text-gray-600 mb-2 text-clip">
                <CalendarCheck2 className="mr-2" size={20} />
                Jan 1 - Dec 31, 2024
              </div>
            </div>

            {/* Bookmark Icon */}
            <div className="absolute top-2 right-1 bg-gray-200 p-2 rounded-full">
              <Bookmark className="text-purple-600" size={20} />
            </div>
          </div>
        ))}
      </div>

      <nav className="flex mt-3 gap-6">
        {/* Left: Location and Calendar Icon */}

        <div className="flex space-x-6 border border-b-4 border-gray-300 rounded-md px-3 py-1">
          <button
            className={`text-lg font-semibold ${
              activeTab === "All"
                ? "text-black border-b-2 border-gray-400"
                : "text-gray-600"
            } transition`}
            onClick={() => setActiveTab("All")}
          >
            All
          </button>
          <button
            className={`text-lg font-semibold ${
              activeTab === "Live"
                ? "text-black border-b-2 border-gray-400"
                : "text-gray-600"
            } transition`}
            onClick={() => setActiveTab("Live")}
          >
            Live
          </button>
          <button
            className={`text-lg font-semibold ${
              activeTab === "Upcoming"
                ? "text-black border-b-2 border-gray-400"
                : "text-gray-600"
            } transition`}
            onClick={() => setActiveTab("Upcoming")}
          >
            Upcoming
          </button>
        </div>

        <div className="flex items-center space-x-6 border border-b-4 border-gray-300 rounded-md px-3 py-1">
          <div className="flex items-center text-black cursor-pointer">
            <span className="text-lg font-semibold">Location</span>
            <ChevronDown size={20} className="ml-2" />
          </div>
        </div>

        <div className="flex items-center space-x-6 border border-b-4 border-gray-300 rounded-md px-3 py-1">
          <div className="flex items-center text-black cursor-pointer">
            <Calendar size={20} className="mr-2" />
            <span className="text-lg font-semibold">Event Date</span>
          </div>
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-72">
          <Search size={20} className="text-black mr-1" />
          <input
            type="text"
            placeholder="Search by event name..."
            className="w-full bg-transparent text-md text-gray-600 focus:outline-none"
          />
        </div>
      </nav>
    </section>
  );
};

export default EventFeature;
