import Image from "next/image";
import SupportImagePath from "/assets/COA-agent-pic.png";
import { PersonRounded } from "@material-ui/icons";
import { Auth } from "./sign_In_Component";

export default function Custom_Navigation_Header() {
    return <div>
      <div className="bg-white flex flex-col justify-center">
        <div className="flex px-20 py-5 justify-between">
          <div className="flex justify-center gap-3">
            <div className="flex flex-col justify-center"> logo</div>
            <DropDownTexts title="More Travel" />
            <DropDownTexts title="Deals" />
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
            <DropDownTexts title="USD ($) / EN" />
            <DropDownTexts title="Deals" showDropDown={false} />
            <AmericanExpressPayComponenet/>
            <Auth/>
          </div>
        </div>
      </div>
    </div>
  }


  function DropDownTexts({ title, showDropDown }: { title: string, showDropDown?: boolean }) {
    return <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-md pe-1 font-semibold text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-black" type="button">
      <span className="sr-only">Open user menu</span>
      {title}
      {showDropDown ?? true ? <svg className="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
      </svg> : <div></div>}
    </button>
  }

  function AmericanExpressPayComponenet(){
    return <button type="button" className="text-blue-900 border border-blue-900 gap-2 border-2 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm p-2 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
    Pay with American Express
  </button>
  }