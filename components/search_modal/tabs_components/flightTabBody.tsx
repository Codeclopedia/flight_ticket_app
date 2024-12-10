import { Cancel, DateRange, LocationOn, Person, SyncAlt } from "@material-ui/icons";

export function FlightsTabBody() {
    return <div className="flex relative w-full px-5 pt-2 space-x-2">
      
      <AirportNameTab placeholder="Arrival"/>
      <AirportNameTab placeholder= "Destination"/>
      <TravelIconComponent/>
     <TicketDateComponent placeholder="Arrival"/>
     <TicketDateComponent placeholder="Depart"/>
      <NumberOfPersonComponent/>
      <SearchButton/>
      </div>
  }

  function AirportNameTab({placeholder} : {placeholder: string}){
    return <div className="relative flex mb-6 py-1 w-60">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <LocationOn />
    </div>
    <input type="text" id="input-group-1"  className=" bg-white border border-gray-300 text-gray-900 text-xl rounded-sm focus:ring-blue-500 focus:text-md focus:border-blue-500 block w-full ps-10 p-2.5" placeholder={placeholder} />
    <button>
      <div className="absolute inset-y-0 end-0 -top-3">
        <Cancel onClick={()=>{}} />
      </div>
    </button>
  </div>
  }

  function TravelIconComponent(){
    return  <button className="absolute start-60 p-1 top-5 bg-white border border-gray-300 rounded-full">
    <SyncAlt className="fill-black stroke-black w-5 " />
  </button>
  }

  function TicketDateComponent({placeholder} : {placeholder: string}){
    return  <div className="relative flex mb-6 py-1 w-28">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <DateRange />
    </div>
    <input id="default-datepicker" type="text" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} />
  </div>
  }

  function NumberOfPersonComponent(){
    return <div className="relative flex mb-6 py-1 w-28">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <Person />
    </div>
    
    <textarea id="default-datepicker" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1&#10;Traveler"/>
  </div>
  }

  function SearchButton(){
    return <div className="mb-6 relative bg-orange-600 rounded text-white font-bold flex flex-col justify-center w-40"><div className="flex flex-row justify-center"> Search Flights</div></div>
    
  }