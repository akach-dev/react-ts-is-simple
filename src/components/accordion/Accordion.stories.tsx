import React, {useState} from "react";
import {action} from '@storybook/addon-actions';


import {Accordion} from "./Accordion";


export default {
  component: Accordion
}


const callback = action('accordion mode change event fired ')
const callbackValue = action('accordion callbackValue')

const data = [{title: 'Alex', value: 1}, {title: 'Max', value: 2}, {title: 'Oksana', value: 3}]


export const CollapsedAccordion = () => {
  return (
     <Accordion title={'Collapsed Accordion'} collapsed={true} callback={callback} data={data}
                callbackValue={callbackValue}/>

  )
}
export const OpenedAccordion = () => {
  return (
     <Accordion title={'Opened Accordion'} collapsed={false} callback={callback} data={data}
                callbackValue={callbackValue}/>
  )
}


export const ClickAccordion = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
     <Accordion title={'Users'} collapsed={collapsed} callback={() => setCollapsed(!collapsed)} data={data}
                callbackValue={callbackValue}/>
  )
}
