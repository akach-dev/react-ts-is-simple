import React from "react";

import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type  AccordionPropsType = {
  title: string
  collapsed?: boolean
}

export function Accordion({title, collapsed}: AccordionPropsType) {
  return (
     <div>
       <AccordionTitle title={title}/>
       {
          collapsed && (
             <AccordionBody key={'body'}/>
          )
       }
     </div>
  )
}