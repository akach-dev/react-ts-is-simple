import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";


type  AccordionPropsType = {
  title: string
  collapsed: boolean
}

export function Accordion({title, collapsed}: AccordionPropsType) {
  return (
     <>
       {
         collapsed
            ? <AccordionTitle title={title}/>
            : <AccordionBody/>
       }
     </>
  );
}