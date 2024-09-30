import React from 'react'
import TEMPLATE from "./TemplateListSection"
import Image from "next/image"
import Link from "next/link"

function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={"/dashboard/content/" + item?.slug}>
    <div className="flex flex-col p-5 shadow-md rounded-md border bg-white gap-3 cursor-pointer hover:scale-105 transition-all duration-100">
        <Image src={item.icon} width={60} height={60} />
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-gray-500 clamp-3 text-sm">{item.desc}</p>
    </div>
    </Link>
  )
}

export default TemplateCard