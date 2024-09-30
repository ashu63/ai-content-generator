"use client"
import React from 'react'
import {Search} from "lucide-react"

function SearchSection({onSearchEvent}:any) {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-blue-500 via-blue-700 to-purple-600 text-white gap-3">
        <h2 className="text-3xl">Browse All Templates</h2>
        <p className="text-sm font-semibold text-gray-300">What would you like to create today?</p>
        <div className="w-full mt-6 flex items-center justify-center">
            <div className="w-[80%] border rounded-md bg-white p-2 flex items-center gap-3">
                <Search className="text-primary" />
                <input onChange={(event) => onSearchEvent(event.target.value)} className="bg-transparent w-full outline-none text-gray-800" type="text" placeholder="Search" />
            </div>
        </div>
    </div>
  )
}

export default SearchSection