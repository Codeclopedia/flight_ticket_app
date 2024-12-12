import { useState } from "react";
import { Flight, Pool, Hotel, DirectionsCar } from "@mui/icons-material";
import { Tabs, Tab } from "@nextui-org/react";
import { FlightTabHeader } from "./tabs_components/flightTabHead";
import { FlightsTabBody } from "./tabs_components/flightTabBody";

interface SearchFlightModalTabsProps {
  onTabChange: (tab: string) => void; // Callback to pass the selected tab to the parent
}

export enum PlacementEnum {
  Flights = "Flights",
  Packages = "Packages",
  Hotels = "Hotels",
  Cars = "Cars",
}

export function SearchFlightModalTabs({ onTabChange }: SearchFlightModalTabsProps) {
  const [selectedTab, setSelectedTab] = useState<string>("Flights");

  const handleTabChange = (key: string) => {
    setSelectedTab(key);
    onTabChange(key);
  };

  return (
    <div className="absolute border border-slate-100 shadow-md bg-white mr-20 top-72 rounded-lg w-auto lg:w-[1275px]">
      <div className="flex w-full flex-col">
        <Tabs
          aria-label="Options"
          color="success"
          variant="underlined"
          classNames={{
            tabList: "gap-2 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#0000FF]",
            tab: "max-w-fit pl-5 h-12",
            tabContent: "group-data-[selected=true]:text-[#0000FF]",
          }}
          selectedKey={selectedTab}
          onSelectionChange={(key) => handleTabChange(key.toString())}
        >
          <Tab
            key="Flights"
            title={
              <div className="flex flex-row space-x-2">
                <Flight />
                <span>Flights</span>
              </div>
            }
          >
            <FlightTabHeader />
            <FlightsTabBody />
          </Tab>
          <Tab
            key="Packages"
            title={
              <div className="flex flex-row space-x-2">
                <Pool />
                <span>Packages</span>
              </div>
            }
          >
            <div>Coming Soon....</div>
          </Tab>
          <Tab
            key="Hotels"
            title={
              <div className="flex items-center space-x-2">
                <Hotel />
                <span>Hotels</span>
              </div>
            }
          >
            <div>Coming Soon....</div>
          </Tab>
          <Tab
            key="Photos"
            title={
              <div className="flex items-center space-x-2">
                <DirectionsCar />
                <span>Photos</span>
              </div>
            }
          >
            <div>Coming Soon....</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
