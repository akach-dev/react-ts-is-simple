import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion/AccordionTitle";

function App() {
  return (
    <div className="App">
      <AppTitle/>
      <Rating/>
      <Accordion/>
      <Rating/>
    </div>
  );
}

function AppTitle() {
  return <>
    This is App component
  </>
}

export default App;
