"use client";
import { Bookmark, Target, CalendarCheck2 } from "lucide-react";

const EventDetail = () => {
  return (
    <>
      <section className="flex justify-between items-center px-10">
        <div className="flex flex-col items-center justify-center bg-gray-200 text-white p-4 rounded-md w-20 h-20">
          <span className="text-xl font-semibold text-purple-500">FEB</span>
          <span className="text-3xl font-bold text-black">27</span>
        </div>

        <div className="flex-1 pl-6">
          <h3 className="text-lg font-bold text-black mb-1">
            BHA - Kickoff to New Ownership
          </h3>
          <p className="text-sm text-gray-600">
            Rim Rock Riders, 17037 Alfalfa Rd, Powell Butte, OR 97753, USA
          </p>
        </div>

        <div className="flex items-center justify-center bg-gray-200 p-3 rounded-full cursor-pointer mr-2">
          <Bookmark className="text-gray-600" size={20} />
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-200 text-white p-4 rounded-md w-20 h-20">
          <span className="text-xl font-semibold text-purple-500">FEB</span>
          <span className="text-3xl font-bold text-black">27</span>
        </div>

        <div className="flex-1 pl-6">
          <h3 className="text-lg font-bold text-black mb-1">
            BHA - Kickoff to New Ownership
          </h3>
          <p className="text-sm text-gray-600">
            Rim Rock Riders, 17037 Alfalfa Rd, Powell Butte, OR 97753, USA
          </p>
        </div>

        <div className="flex items-center justify-center bg-gray-200 p-3 rounded-full cursor-pointer">
          <Bookmark className="text-gray-600" size={20} />
        </div>
      </section>
    </>
  );
};

export default EventDetail;
