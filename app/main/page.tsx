"use client"
import WannaCallBanner from "@/components/banners/callToAgent_Banner";
import { FooterModal } from "@/components/bottom/bottom_modal";
import Custom_Navigation_Header from "@/components/custom_navigation_header";
import { OfferEmailModal } from "@/components/offer_modal";
import {SearchFlightModal} from "@/components/search_modal/search_main_page_modal";
import { TermConditionModal } from "@/components/term_and_condition_modal";
import { Satisfy, Crimson_Text, Roboto } from "next/font/google";
import { useState } from "react";


const PrimaryFont = Satisfy({
  weight: '400',
  subsets: ['latin'],
})

const crimson_Text = Crimson_Text({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string>("Flights");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <main >
      <WannaCallBanner />
      <Custom_Navigation_Header />
      <div>
        <SearchFlightModal onTabChange={handleTabChange} />
        <div className="px-20">
          <NeedHelpAgentBookingBanner currentSelectedTab={selectedTab}/>
          <LowFareCountryOffers />
          <OfferEmailModal />
          <BenifitsModal />
          <Introduction />
          <TermConditionModal />
        </div>
        <FooterModal/>
      </div>
    </main >
  );
}



function Introduction() {
  return <div>
    <div className="font-bold text-black text-2xl">
      Book Cheap Flights on CheapOair
    </div>
    <div className="font-normal text-black text-sm text-gray-600 py-2">
      Why pay full price for your next flight when you can take advantage of cheap flights on CheapOair? We offer unbelievable savings on flights worldwide, so whether you’re looking for a weekend getaway or a once-in-a-lifetime trip around the globe, we can get you there for less. Even better: we update our discount airfares constantly, so you can find new deals on CheapOair every few seconds! On your next trip, don’t take your chances anywhere else.
    </div>
  </div>
}



function BenifitsModal() {
  return <div className="font-bold text-2xl py-10">
    Here&aspos;s why travelers choose CheapOair
    <div className="flex flex-row-3 justify-between py-5">
      <PositiveQualities title="Get Great Deals!" subHeading="Choose from 500+ airlines for low airfares!" />
      <PositiveQualities title="Book Instantly!" subHeading="Choose from 500+ airlines for low airfares!" />
      <PositiveQualities title="24/7 Customer Support" subHeading="Choose from 500" />
    </div>
  </div>
}

function PositiveQualities({ title, subHeading }: { title: string, subHeading: string }) {
  return <div className="flex flex-row text-sm gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" className="size-6" stroke="#34C959">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
    <div className="flex flex-col justify-start space-y-1"><div className="font-bold">{title}</div><div className="font-normal">{subHeading}</div></div>
  </div>
}

function LowFareCountryOffers() {
  return <div className="py-10">
    <div className="flex flex-row gap-1.5 text-lg font-bold">
      Found these <div className="text-green-500">low</div> fare deals for your next trip
    </div>
    <div className="flex flex-row space-x-20 ">
      <CountryCardWithImage name="Australia" />
      <CountryCardWithImage name="Toronto" imageUrl="https://images.pexels.com/photos/1868676/pexels-photo-1868676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <CountryCardWithImage name="Los Angeles" imageUrl="https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    </div>
    <div className="text-sm text-gray-500 py-10"> *All fares above were found in last 8 hours. Fares are round trip/one way. Fares incl. all fuel surcharges, taxes & fees and our service fees. Displayed fares are based on historical data, are subject to change and cannot be guaranteed at the time of booking. See all booking terms and conditions.</div>
  </div>
}


function CountryCardWithImage({ name, imageUrl }: { name: string, imageUrl?: string }) {
  return <div className="w-full space-x-4 pt-8">
    <div className="w-full flex-col overflow-hidden bg-white rounded">
      <img className="w-max h-60" src={imageUrl ?? "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" />
      <div className="p-2">

        <div className="flex flex-row justify-between">
          <div>
            <div className="font-bold text-lg">{name}</div>
            <div className="font-normal text-md">DEL - NYC</div>
            <div className="font-normal text-md text-gray-500">OCT 08 - JAN 14</div>
          </div>
          <div className="flex flex-col justify-center font-bold text-green-500 text-lg">$706.84
            <div className="text-gray-500 font-normal text-sm">Round Trip</div>
          </div>
        </div>
        <BookingPriceGradient name={name} />
      </div>
    </div>
  </div>
}

function BookingPriceGradient({ name }: { name: string }) {
  return <div> <div className="rounded-3xl bg-gradient-to-r from-green-500 via-yellow-600 to-red-700 h-2 mx-4 mt-6 mb-2"></div>
    <div className="flex flex-row justify-around text-sm text-gray-500">
      <div>$890</div>
      <div>$1190</div>
    </div>
    <div className="flex justify-center pt-3 text-gray-400 font-normal text-sm">
      Similar trip cost to {name}</div></div>
}

function NeedHelpAgentBookingBanner({currentSelectedTab}:{currentSelectedTab:string}) {
  return <div className={`flex flex-row justify-between bg-blue-950 p-7  ${currentSelectedTab=="Flights"? `mt-40`:`mt-10`} rounded-lg`}>
    <div className="">
      <div className="text-white font-semibold text-lg">
        Need help booking? Our agents are ready!
      </div>
      <div className="text-white font-normal text-lg">
        Call us 24/7 at 000-800-050-3540
      </div>
    </div>
    <div className="flex flex-row gap-10">
      <AirLineSmallBanner title="A" />
      <AirLineSmallBanner title="B" />
      <AirLineSmallBanner title="C" />
    </div>
  </div>
}

function AirLineSmallBanner({ title }: { title: string }) {
  return <div className="w-28">
    <div className="bg-white rounded px-5 py-4 flex justify-center"> {title}</div>
    <div className="flex flex-row justify-center font-normal text-sm text-white"> {title}</div>
  </div>
}






