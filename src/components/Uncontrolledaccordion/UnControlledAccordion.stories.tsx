import {UnControlledAccordion} from "./UnControlledAccordion";


export default {
  component: UnControlledAccordion
}

// const callback = action('accordion mode change event fired ')


export const ClickAccordion = () => {

  return (
     
     <UnControlledAccordion title={'Click Accordion'}/>
  )
}