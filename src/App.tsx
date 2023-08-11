import React from 'react';
import './App.css';

export function App() {
  return (
     <div className="App">
       <h2>This is APP Component</h2>
       <Rating/>
       <Accordion/>
     </div>
  );
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

function Accordion() {
  return (
     <div>
       <h3>Menu</h3>
       <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
       </ul>
     </div>
  )
}

function Star() {
  return <div>star</div>
}