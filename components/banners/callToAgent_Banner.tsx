"use client"

import { useState } from "react";

export default function WannaCallBanner() {

    const [closeBanner, usecloseBanner] = useState(false);

    const bannerElement = <div id="marketing-banner" tabIndex={-1} className="fixed z-50 shadow-2xl flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 bottom-6 dark:border-gray-600">
        <div>
            <div>
                Looking for last-minute deals? Just give us a call to get phone-only deals!
            </div>
            <div className="flex gap-2 text-lg font-normal text-black">
                Call us at
                <div className="flex justify-center font-bold text-red-900">000-800-050-3540</div>
                and get assistance 24/7.
            </div></div>
        <div className="flex items-center flex-shrink-0">
            <a href="#" className="px-5 py-2 me-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Call now</a>
            <button data-dismiss-target="#marketing-banner" type="button" onClick={() => { usecloseBanner(true) }} className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close banner</span>
            </button>
        </div>
    </div>

    return closeBanner ?? false ? <div /> : bannerElement

}