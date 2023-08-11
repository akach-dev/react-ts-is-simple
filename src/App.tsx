import React from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {PageTitle} from "./components/PageTitle";
import {Accordion} from "./components/accordion/Accordion";

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
     </div>
  );
}

