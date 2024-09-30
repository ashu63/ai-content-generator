import Templates from '@/app/(data)/Templates'
import React from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'

interface PROPS{
    params : {
        "template-slug":string
    }
}
function CreateNewContent(props:PROPS) {
    const selectedTemplates:TEMPLATE|undefined = Templates?.find((item) => item.slug === props.params['template-slug'])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <FormSection selectedTemplates={selectedTemplates} />
        <OutputSection />
    </div>
  )
}

export default CreateNewContent