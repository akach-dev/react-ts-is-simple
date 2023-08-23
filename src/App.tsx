import React from 'react';
import './App.css';
import {PageTitle} from "./components/PageTitle";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {UnControlledAccordion} from "./components/uncontrolledaccordion/UnControlledAccordion";


export function App() {
  return (
     <>
       <PageTitle title={'This is APP Component'}/>
       {/*<Accordion title={'Menu'} collapsed/>*/}
       {/*<Accordion title={'Users'} collapsed={false}/>*/}
       <UnControlledAccordion title={'Menu'} collapsed={false}/>
       <UnControlledAccordion title={'Users'} collapsed={false}/>
       <Rating/>
       <OnOff/>
     </>
  )
}






