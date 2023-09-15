import React, {FC, useReducer} from "react";

import {UnControlledAccordionTitle} from "./UnControlledAccordionTitle";
import {UnControlledAccordionBody} from "./UnControlledAccordionBody";
import {reducer, TOGGLE_STATE} from "./reducer";

type  UnControlledAccordionPropsType = {
  title: string
}


export const UnControlledAccordion: FC<UnControlledAccordionPropsType> = ({title}) => {

  const [state, dispatch] = useReducer(reducer, {collapsed: false})


  const collapsedHandler = () => dispatch({type: TOGGLE_STATE})

  return (
     <div>
       <UnControlledAccordionTitle callback={collapsedHandler} title={title}/>
       {
          state.collapsed && (
             <UnControlledAccordionBody key={'body'}/>
          )
       }
     </div>
  )
};