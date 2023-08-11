import React from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {PageTitle} from "./components/PageTitle";
import {Accordion} from "./components/accordion/Accordion";
import {Cars} from "./components/Cars";

export type TopCarsType = {
  manufacturer: string
  model: string
}

const topCars: TopCarsType[] = [
  {manufacturer: 'BMW', model: 'm5cs'},
  {manufacturer: 'Mercedes', model: 'e63s'},
  {manufacturer: 'Audi', model: 'rs6'}
]


export function App() {
  return (
     <div className="App">
       <PageTitle title={'This is APP Component'}/>
       <Accordion
          collapsed
          title={'Users'}/>
       <Rating/>
       <Accordion
          title={'Menu'}/>
       <Cars cars={topCars}/>
     </div>
  );
}

