export function OfferEmailModal(){
    return <div className="static shadow-lg bg-white overflow-hidden py-5 rounded">
    <div className="absolute bg-red-700 px-3 py-1 text-white font-bold text-md flex justify-center w-min">OFFER</div>

    <div className="py-1 px-10 flex justify-between">
     <div className="flex flex-col justify-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16 bg-blue-500 rounded-full ml-28">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
      </div>
      <div className="flex flex-col justify-center w-9/12 space-y-1">
        <div className="flex font-bold text-lg">Sign Up and Save Up to <div className="text-blue-500">$15 off◊</div></div>
        <div className="flex font-normal text-md">our fees on selected regions with a promo code!</div>
        < input className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400" />
      <div className="flex flex-row justify-between text-sm text-gray-500">
        <div>◊ Expires Aug 31, 2024. Restrictions apply.◊</div>
        <div> Learn more</div>
      </div>
      </div>
    </div>
  </div>
}