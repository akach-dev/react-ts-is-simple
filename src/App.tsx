import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/Rating";
import {AppTitle} from "./components/AppTitle";

export function App() {
  return (
     <div className="App">
       <AppTitle/>
       <Rating/>
       <Accordion/>
     </div>
  );
}

