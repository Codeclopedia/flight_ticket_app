"use client"

import { Cancel, CloseRounded, DateRange, LocationOn } from "@mui/icons-material"

export function HeaderSecondRow() {
    return <div className="flex gap-4 justify-between">
        <CustomHeaderInputFeild title='From' />
        <CustomHeaderInputFeild title='To' />
        <div className="relative flex flex-row py-4 items-center"><DateRange width={5} height={5} className="absolute ml-3" /><input className="border border-lg rounded rounded-sm pl-9 pl-4 py-4 text-black font-bold" placeholder="Any Time, 1-14 days"></input></div>
        <div className="bg-orange-500 my-6 w-full text-center rounded font-bold text-white p-5">Explore Deals</div>
    </div>
}

function CustomHeaderInputFeild({ title }: { title: string }) {
    return <div className="relative w-1/4 flex flex-row py-4 items-center">
        <LocationOn width={5} height={5} className="absolute ml-3" />
        <input className="border border-lg rounded rounded-sm pl-9 pl-4 py-4" placeholder={title}></input>
        <button className="flex items-center"><Cancel className="absolute right-2" style={{ color: "gray", height: "15px" }} /></button>
    </div>
}