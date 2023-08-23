import React from "react";

import {UnControlledAccordionTitle} from "./UnControlledAccordionTitle";
import {UnControlledAccordionBody} from "./UnControlledAccordionBody";

type  UnControlledAccordionPropsType = {
  title: string
  collapsed: boolean
}

export function UnControlledAccordion({title, collapsed}: UnControlledAccordionPropsType) {
  return (
     <div>
       <UnControlledAccordionTitle title={title}/>
       {
          !collapsed && (
             <UnControlledAccordionBody key={'body'}/>
          )
       }
     </div>
  )
}