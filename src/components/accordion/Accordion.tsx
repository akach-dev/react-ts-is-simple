import React from "react";

import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type  AccordionPropsType = {
  title: string
  collapsed: boolean
  callback: () => void
}

export function Accordion({title, collapsed, callback}: AccordionPropsType) {


  return (
     <div>
       <AccordionTitle title={title} callback={callback}/>
       {
          !collapsed && (
             <AccordionBody key={'body'}/>
          )
       }
     </div>
  )
}