"use client";

import { useState } from "react";

const EventTabs = () => {
  const [selectedTab, setSelectedTab] = useState("All Events");
  const [savedEventsCount, setSavedEventsCount] = useState(2);

  const tabs = [
    { id: "All Events", label: "All Events" },
    { id: "Saved Events", label: `Saved Events (${savedEventsCount})` },
  ];

  return (
    <div className="flex justify-start border-b px-6">
      {tabs.map((tab) => (
        <h2
          key={tab.id}
          onClick={() => setSelectedTab(tab.id)}
          className={`px-4 py-2 text-lg font-semibold cursor-pointer transition ${
            selectedTab === tab.id
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-600 hover:text-purple-600"
          }`}
        >
          {tab.label}
        </h2>
      ))}


    </div>
  );
};

export default EventTabs;
