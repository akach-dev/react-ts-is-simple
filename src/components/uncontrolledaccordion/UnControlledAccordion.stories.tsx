import {UnControlledAccordion} from "./UnControlledAccordion";
import {action} from "@storybook/addon-actions";


export default {
  component: UnControlledAccordion
}

// const callback = action('accordion mode change event fired ')


export const ClickAccordion = () => {

  return (
     <UnControlledAccordion title={'Click Accordion'}/>
  )
}