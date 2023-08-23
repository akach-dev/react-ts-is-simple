import React, {useState} from "react";

import {UnControlledAccordionTitle} from "./UnControlledAccordionTitle";
import {UnControlledAccordionBody} from "./UnControlledAccordionBody";

type  UnControlledAccordionPropsType = {
  title: string
  collapsed: boolean
}

export function UnControlledAccordion({title}: UnControlledAccordionPropsType) {

  const [collapsed, setCollapsed] = useState(false)

  const collapsedHandler = () => setCollapsed(prevState => !prevState)

  return (
     <div>
       <UnControlledAccordionTitle callback={collapsedHandler} title={title}/>
       {
          collapsed && (
             <UnControlledAccordionBody key={'body'}/>
          )
       }
     </div>
  )
}