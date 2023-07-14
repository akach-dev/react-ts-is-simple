import React from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";
import {PageTitle} from "./components/PageTitle";

function App() {
  return (
     <div className="App">
       <PageTitle title={'This is App '}/>
       <Rating value={3}/>
       <Accordion title={'Menu'}/>
       <Rating value={1}/>
       <Rating value={2}/>
       <Rating value={3}/>
       <Rating value={4}/>
       <Rating value={5}/>
       <Accordion title={'Users'}/>
     </div>
  );
}

export default App;
