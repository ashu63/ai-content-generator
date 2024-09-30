'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Image from '@/node_modules/next/image'
import React from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'

interface PROPS{
    selectedTemplates?:TEMPLATE
}

function FormSection({selectedTemplates}:PROPS) {

    const onsubmit = (e:any) => {
        e.preventDefault();
    }

  return (
    <div className="border rounded-lg shadow-md rounded-md p-5 bg-white">
        {/* @ts-ignore */}
        <Image src={selectedTemplates?.icon} height={70} width={70} alt="icon" />
        <h2 className="text-2xl text-primary my-2 font-semibold ">{selectedTemplates?.name}</h2>
        <p className="text-sm text-gray-600">{selectedTemplates?.desc}</p>

        <form onSubmit={onsubmit} className="mt-6">
            {selectedTemplates?.form?.map((item, index) => (
                <div key={index} className="my-3 mb-7">
                    <Label className='font-semibold '>{item.label}</Label>
                    {item.field == 'input' ? 
                    <Input /> : item.field == "textarea" ? <Textarea /> : null    
                }
                </div>
            ))}
            <Button type="submit" className="w-full py-6 text-md">Genetare Content</Button>
        </form>

    </div>
  )
}

export default FormSection