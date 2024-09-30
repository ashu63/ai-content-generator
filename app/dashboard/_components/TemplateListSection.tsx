import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
  name:string,
  desc:string,
  category:string,
  icon:string,
  slug:string,
  aiPrompt:string,
  form?:FORM[]
}

export interface FORM{
  label: string,
  field: string,
  name: string,
  required?: boolean

}

function TemplateListSection({userSearchInput}:any) {
  const [filterTemplates, setFilterTemplates] = useState(Templates)
  useEffect(() => {
    if(userSearchInput){
      const filterData = Templates.filter((item) => item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
      setFilterTemplates(filterData)
    }
    else{
      setFilterTemplates(Templates)
    }
    
  },[userSearchInput])

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-2">
      {filterTemplates.map((item:TEMPLATE, index:number) => (
        <TemplateCard key={index} {...item} />
      ))}
    </div>
  )
}

export default TemplateListSection