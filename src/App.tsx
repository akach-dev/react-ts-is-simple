import React from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";

function App() {
  return (
     <div className="App">
       <PageTitle title={'This is App component'}/>
       <Rating value={3}/>
       <Accordion/>
       <Rating value={1}/>
       <Rating value={2}/>
       <Rating value={3}/>
       <Rating value={4}/>
       <Rating value={5}/>
     </div>
  );
}

function PageTitle({title}: any) {
  return <h2>
    {
      title
    }
  </h2>
}

export default App;
