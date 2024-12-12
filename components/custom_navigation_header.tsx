import Image from "next/image";
import SupportImagePath from "/assets/COA-agent-pic.png";
import { Auth } from "./sign_In_Component";
import { useState } from "react";

import "../features/styles/heading_style.css"
import { Divider } from "@mui/material";

export default function Custom_Navigation_Header() {
  const [isMoreDealsTabOpen, setIsMoreDealsTabOpen] = useState(false);
  const [isDealsTabOpen, setIsDealsTabOpen] = useState(false);
  const [isCurrenyTabOpen, setIsCurrencyTabOpen] = useState(false);

  return <div>
    <div className="bg-white flex flex-col justify-center">
      <div className="flex px-20 py-5 justify-between">
        <div className="flex justify-center gap-3">
          <div className="flex flex-col justify-center font-bold text-3xl">Logo</div>
          <DropDownTexts title="More Travel" onClick={() => { setIsMoreDealsTabOpen(!isMoreDealsTabOpen) }} />
          {isMoreDealsTabOpen && <MoreDealsModalSheet />}
          <DropDownTexts title="Deals" onClick={() => { setIsDealsTabOpen(!isDealsTabOpen) }} />
          {isDealsTabOpen && <DealsModalSheet />}
        </div>
        <div className="flex justify-center gap-7">
          <div className="flex flex-row justify-center gap-2">
            <Image src={SupportImagePath} alt="" width={50} height={50} />
            <button>
              <div className="flex flex-col justify-center">
                <div className="font-bold"> 000-800-050-3540</div>
                <div className="text-sm">Speak to a travel expert</div>
              </div>
            </button>
          </div>
          <DropDownTexts title="USD ($) / EN" onClick={() => {
            setIsCurrencyTabOpen(!isCurrenyTabOpen)
            console.log(isCurrenyTabOpen)
          }} />
          {isCurrenyTabOpen && <SelectCurrencyDropDown onClick={() => setIsCurrencyTabOpen(false)} />}
          <DropDownTexts title="Deals" showDropDown={false} onClick={() => { }} />
          <AmericanExpressPayComponenet />
          <Auth />
        </div>
      </div>
    </div>
  </div>
}

function MoreDealsModalSheet() {
  const moreDeals = ["Flights", "hotels", "Car", "Package", "More"]

  return <div className="more-deals-modal">{moreDeals.map((val) => <div key={val}>{val}</div>)}</div>
}

function SelectCurrencyDropDown({ onClick }: { onClick: Function }) {

  const typesOfLanguages = [{ lang: "English-US", map: "us" }, { lang: "English-UK", map: "gb" }, { lang: "Espaneol", map: "es" }, { lang: "Hindi", map: "in" }]


  return <div className="modal-overlay" onClick={() => onClick()}>
    <div className="pb-2 font-bold">Language</div>
    <Divider />
    {typesOfLanguages.map((val) => <text key={val.map} className="pr-2 pb-2 text-sm text-black  space-2 hover:text-blue-600">{val.map}-{val.lang}</text>)}

    <div className="pt-2 pb-2 font-bold">Currency</div>
    <Divider />

  </div>

}

function DealsModalSheet() {
  return <div className="modal-overlay-deals">
    <div className="modal-content">
      <div className="modal-section">
        <h3>Top Deals</h3>
        <ul>
          <li>Gift Cards</li>
          <li>Flight Deals</li>
          <li>Domestic Flights</li>
          <li>International Flights</li>
          <li>Group Travel</li>
          <li>One Way Flights</li>
          <li>Round Trip Flights</li>
        </ul>
      </div>
      <div className="modal-section">
        <h3>Travel by Interest</h3>
        <ul>
          <li>Last Minute Flights</li>
          <li>Military Travel</li>
          <li>Senior Travel</li>
          <li>Student Travel</li>
          <li>Red Eye Flights</li>
          <li>Weekend Getaways</li>
        </ul>
      </div>
      <div className="modal-section">
        <h3>Travel by Region</h3>
        <ul>
          <li>USA Flights</li>
          <li>Mexico Flights</li>
          <li>Caribbean Flights</li>
          <li>Europe Flights</li>
          <li>Multi City Flights</li>
        </ul>
      </div>
      <div className="modal-section">
        <h3>Travel by Price</h3>
        <ul>
          <li>Flights Under $199</li>
          <li>4 Star Hotels Under $99</li>
          <li>Business Class Flights</li>
          <li>First Class Flights</li>
          <li>Premium Economy Flights</li>
          <li>Cheap Airline Tickets</li>
        </ul>
      </div>
      <div className="modal-section">
        <h3>Travel Blog</h3>
        <ul>
          <li>Top US Destinations</li>
          <li>International Travel</li>
          <li>Fuel Your Interests</li>
          <li>Adventure Travel</li>
          <li>Get Tip to Go</li>
        </ul>
      </div>
    </div>
  </div>
}


function DropDownTexts({ title, showDropDown, onClick }: { title: string, showDropDown?: boolean, onClick: Function }) {
  return <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-md pe-1 font-semibold text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-black" onClick={() => onClick()} type="button">
    <span className="sr-only">Open user menu</span>
    {title}
    {showDropDown ?? true ? <svg className="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
    </svg> : <div></div>}
  </button>
}

function AmericanExpressPayComponenet() {
  return <button type="button" className="text-blue-900 border border-blue-900 gap-2 border-2 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm p-2 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
    Pay with American Express
  </button>
}