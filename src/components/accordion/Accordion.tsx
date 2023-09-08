import React from "react";

import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";


export type DataType = {
  title: string
  value: any
}
type  AccordionPropsType = {
  title: string
  collapsed: boolean
  callback: () => void
  data: DataType[]
  callbackValue: (value: any) => void

}

export function Accordion({title, collapsed, callback, data, callbackValue}: AccordionPropsType) {


  return (
     <div>
       <AccordionTitle title={title} callback={callback}/>
       {
          !collapsed && (
             <AccordionBody key={'body'} data={data} callbackValue={callbackValue}/>
          )
       }
     </div>
  )
}