import React, {useState} from "react";
import {action} from '@storybook/addon-actions';


import {Accordion} from "./Accordion";

// const meta: Meta<typeof Accordion> = {
//   component: Accordion,
// };
//
// export default meta;
//
// type Story = StoryObj<typeof Accordion>;
// export const FirstStory: Story = {
//   args: {
//     title: 'open',
//     collapsed: true,
//   },
// }

export default {
  component: Accordion
}


const callback = action('accordion mode change event fired ')

export const CollapsedAccordion = () => {
  return (
     <Accordion title={'Collapsed Accordion'} collapsed={true} callback={callback}/>

  )
}
export const OpenedAccordion = () => {
  return (
     <Accordion title={'Opened Accordion'} collapsed={false} callback={callback}/>
  )
}


export const ClickAccordion = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
     <Accordion title={'Click Accordion'} collapsed={collapsed} callback={() => setCollapsed(!collapsed)}/>
  )
}
