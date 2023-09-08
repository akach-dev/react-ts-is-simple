import React, {FC} from "react";
import {DataType} from "./Accordion";

type AccordionBodyPropsType = {
  data: DataType[]
  callbackValue: (value: any) => void

}

export const AccordionBody: FC<AccordionBodyPropsType> = ({data, callbackValue}) => (
   <ul>
     {
       data.map(el => {
         const onClickHandler = () => {
           callbackValue(el.value)
         };
         return <li key={el.title} onClick={onClickHandler}>
           {el.title}
         </li>
       })
     }


   </ul>
)

