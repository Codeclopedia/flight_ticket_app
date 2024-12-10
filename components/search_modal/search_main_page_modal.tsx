"use client"

import React, { useState } from "react";
import { SearchFlightModalTabs } from "./search_Modal";

interface SearchFlightModalTabsProps {
  onTabChange: (tab: string) => void; // Callback to pass the selected tab to the parent
}

export function SearchFlightModal({ onTabChange }: SearchFlightModalTabsProps) {
  const [selectedTab, setSelectedTab] = useState<string>("Flights");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    onTabChange(tab);
  };

  return <div className="static w-full h-60 bg-blue-950 flex flex-col justify-center px-20 space-y-2">
    <div className="static text-4xl font-bold text-white">
      Ready to Travel? We’ve Got Great Flight Deals!
    </div>
    <div className=" static flex flex-row text-lg font-normal text-white gap-2">
      Call us at our 24/7 (Toll-Free) Number
      <button>
        <div className="font-bold text-yellow-400">000-800-050-3540</div>
      </button>
      to Get Cheap Flights!
    </div>
    <SearchFlightModalTabs onTabChange={handleTabChange} />
  </div>
}




