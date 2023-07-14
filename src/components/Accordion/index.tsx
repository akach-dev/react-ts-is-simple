import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export function Accordion({title}: any) {
  return (
     <>
       <AccordionTitle title={title}/>
       <AccordionBody/>
     </>
  );
}