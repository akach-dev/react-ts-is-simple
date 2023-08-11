import React from 'react';
import './App.css';

export function App() {
  return (
     <div className="App">
       <AppTitle/>
       <Rating/>
       <Accordion/>
     </div>
  );
}

export function AppTitle() {
  return <h2>This is APP Component</h2>
}

export function Rating() {
  return (
     <div>
       <Star/>
       <Star/>
       <Star/>
       <Star/>
       <Star/>
     </div>
  )
}

function Star() {
  return <div>star</div>
}

function Accordion() {
  return (
     <div>
       <AccordionTitle/>
       <AccordionBody/>
     </div>
  )
}

export function AccordionTitle() {
  return <h3>Menu</h3>
}

export function AccordionBody() {
  return (
     <ul>
       <li>1</li>
       <li>2</li>
       <li>3</li>
     </ul>
  )
}