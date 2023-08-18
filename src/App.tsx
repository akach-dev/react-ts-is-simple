import React from 'react';
import './App.css';
import {PageTitle} from "./components/PageTitle";
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/onOff/OnOff";


export function App() {
  return (
     <>
       <PageTitle title={'This is APP Component'}/>
       <Accordion title={'Menu'} collapsed/>
       <Accordion title={'Users'} collapsed={false}/>
       <Rating value={0}/>
       <Rating value={1}/>
       <Rating value={2}/>
       <Rating value={3}/>
       <Rating value={4}/>
       <Rating value={5}/>
       <OnOff bulb={true}/>
     </>
  )
}






