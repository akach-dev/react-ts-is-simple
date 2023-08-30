import React from "react";

import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type  AccordionPropsType = {
  title: string
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export function Accordion({title, collapsed, setCollapsed}: AccordionPropsType) {

  const setCollapsedHandler = () => setCollapsed(!collapsed)


  return (
     <div>
       <AccordionTitle title={title} callback={setCollapsedHandler}/>
       {
          collapsed && (
             <AccordionBody key={'body'}/>
          )
       }
     </div>
  )
}