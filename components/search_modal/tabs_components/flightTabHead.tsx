

import { KeyboardArrowDown } from "@material-ui/icons";
import { Divider } from "@nextui-org/divider";
import { Tabs, Tab, Card, CardBody, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Radio, RadioGroup, DatePicker, Button } from "@nextui-org/react";
import { useState } from "react";

export function FlightTabHeader() {
    return <div className="flex">
      <div className="flex space-x-4 pl-5">
        <FlightTypeOptionTitleRadio key="bordered-radio-1" title="Round Trip" />
        <FlightTypeOptionTitleRadio key="bordered-radio-2" title="One Way" />
        <FlightTypeOptionTitleRadio key="bordered-radio-3" title="Multi-City" />
      </div>
      <div className="flex flex-col justify-center pl-6">|</div>
      <div className="flex flex-col justify-center"> <FlightSeatTypeDropdown /></div>
    </div>
  }

function FlightTypeOptionTitleRadio({ key, title }: { key: string, title: string }) {
    return <button>
      <div className="flex items-center rounded">
        <input checked id={key} type="radio" value="" name="bordered-radio" className="flex flex-col justify-center shadow shadow-2xl text-blue-600 bg-gray-100 border-blue-300 focus:ring-blue-500  dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700" />
        <label id={key} className="w-full py-4 ms-2 text-black font-semibold text-md">{title}</label>
      </div>
    </button>
  }

  function FlightSeatTypeDropdown() {

    const [selectedKeys, setSelectedKeys] = useState("Coach");
  
    // const selectedValue = React.useMemo(
    //   () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    //   [selectedKeys]
    // );
  
    var DropDownItemClassStyle = ({ keyName }: { keyName: string }) => selectedKeys === keyName ? "p-2 bg-blue-300 text-blue-700 font-bold rounded" : "p-2 hover:bg-gray-100 font-bold rounded";
  
    return <Dropdown >
      <DropdownTrigger>
        <Button
          variant="flat"
          className="flex capitalize text-blue-500 font-semibold"
        >
          {selectedKeys}
          <KeyboardArrowDown className="w-5" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Multiple selection example"
        variant="flat"
        className="bg-white rounded-lg font-bold"
        closeOnSelect={false}
        disallowEmptySelection
  
        selectionMode="single"
        //  selectedKeys={selectedKeys}
        onSelectionChange={(value) => setSelectedKeys(String(value.currentKey))}
      >
        <DropdownItem key="Coach" className={DropDownItemClassStyle({ keyName: "Coach" })}>Coach</DropdownItem>
        <DropdownItem key="Primary Economy" className={DropDownItemClassStyle({ keyName: "Primary Economy" })}>Primary Economy</DropdownItem>
        <DropdownItem key="Business" className={DropDownItemClassStyle({ keyName: "Business" })}>Business</DropdownItem>
        <DropdownItem key="First" className={DropDownItemClassStyle({ keyName: "First" })}>First</DropdownItem>
      </DropdownMenu>
    </Dropdown >
  
  }