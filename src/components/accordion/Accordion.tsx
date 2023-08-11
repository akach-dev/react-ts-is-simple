import React from "react";

import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type  AccordionPropsType = {
  title: string
}

export function Accordion({title}: AccordionPropsType) {
  return (
     <div>
       <AccordionTitle title={title}/>
       <AccordionBody/>
     </div>
  )
}