import {Star} from "./Star";
import React, {FC, useState} from "react";


export const Rating: FC = () => {
  const [select, setSelect] = useState(0)

  return (
     <div>
       <Star value={1} setSelect={setSelect} selected={select > 0}/>
       <Star value={2} setSelect={setSelect} selected={select > 1}/>
       <Star value={3} setSelect={setSelect} selected={select > 2}/>
       <Star value={4} setSelect={setSelect} selected={select > 3}/>
       <Star value={5} setSelect={setSelect} selected={select > 4}/>
     </div>
  )
}