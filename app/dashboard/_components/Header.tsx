import React from 'react'
import {Search } from "lucide-react"

function Header() {
  return (
    <div className="-mt-5 mb-6 shadow-sm p-4 border-b-2 flex items-center justify-between bg-white ">
        <div className="flex items-center gap-2 p-2 border rounded-sm max-w-xl flex-1">
            <Search />
            <input className="w-full outline-none focus:outline-none" type="text" placeholder="Search..." />
        </div>
        <div>
            <h2 className="bg-primary p-3 font-normal gap-2 rounded-full text-xs text-white">Join the membership just for $9.99</h2>
        </div>
    </div>
  )
}

export default Header