import React, {useState} from 'react';
import './App.css';
import {PageTitle} from "./components/PageTitle";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {UnControlledAccordion} from "./components/uncontrolledaccordion/UnControlledAccordion";
import {ValueType} from "./components/Star";


export function App() {

  const [ratingValue, setRatingValue] = useState<ValueType>(0)

  return (
     <>
       <PageTitle title={'This is APP Component'}/>
       {/*<Accordion title={'Menu'} collapsed/>*/}
       {/*<Accordion title={'Users'} collapsed={false}/>*/}
       <UnControlledAccordion title={'Menu'}/>
       <UnControlledAccordion title={'Users'}/>
       <Rating value={ratingValue} setValue={setRatingValue}/>
       <OnOff/>
     </>
  )
}






