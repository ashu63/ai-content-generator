"use client"

import { Home, FileClock, Settings, WalletCards } from "lucide-react"
import {usePathname} from "next/navigation"
import Image from "next/Image"
import React, { useEffect } from 'react'

function SideNav() {
    const menuList = [
        {
            name: "home",
            icon: Home,
            path: "/dashboard"
        },
        {
            name: "History",
            icon: FileClock,
            path: "/dashboard/history"
        },
        {
            name: "Billing",
            icon: WalletCards,
            path: "/dashboard/billing"
        },
        {
            name: "Setting",
            icon: Settings,
            path: "/dashboard/setting"
        },
    ]

    const path = usePathname()
    useEffect(() => {
        console.log(path)
    }, [])
  return (
    <div className="h-screen p-4 shadow-sm border bg-white">
        <div className="flex justify-center mb-6">
            <Image src={"/logo.svg"} height={100} width={100} alt="logo"/>
        </div>
        <div>
            {menuList.map((menu, index) => (
                <div key={index} className={`group flex items-center p-3 gap-4  my-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer  ${path === menu.path && "bg-primary text-white "}`}>
        <menu.icon/>
                <h2 className="font-semibold group-hover:text-white text-md">{menu.name}</h2>
                </div>
        
            ))}
        </div>
    </div>
  )
}

export default SideNav