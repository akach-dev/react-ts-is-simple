import React, {useEffect, useState} from 'react';
import './App.css';
import {PageTitle} from "./components/PageTitle";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {ValueType} from "./components/Star";
import {Accordion} from "./components/accordion/Accordion";
import {UnControlledAccordion} from "./components/Uncontrolledaccordion/UnControlledAccordion";
import {Select} from "./components/Select/Select";


export function App() {

  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [ratingValue, setRatingValue] = useState<ValueType>(0)

  const setCollapsedHandler = () => setCollapsed(prev => !prev)


  return (
     <>
       <PageTitle title={'This is APP Component'}/>
       {/*<Accordion title={'Menu'} collapsed={collapsed} callback={setCollapsedHandler}/>*/}
       {/*<Accordion title={'Users'} collapsed={collapsed} callback={setCollapsedHandler}/>*/}
       {/*<UnControlledAccordion title={'Menu'}/>*/}
       <UnControlledAccordion title={'Users'}/>
       {/*<Rating value={ratingValue} setValue={setRatingValue}/>*/}
       <OnOff/>
     </>
  )
}






