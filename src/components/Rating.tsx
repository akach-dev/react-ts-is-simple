import {Star} from "./Star";
import React, {FC, useState} from "react";

type RatingPropsType = {
  // value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating: FC<RatingPropsType> = () => {
  const [select, setSelect] = useState(0)

  const selectHandler = (value: number) => setSelect(value)
  return (
     <div>
       <button onClick={() => selectHandler(0)}>0</button>
       <Star selected={select > 0}/>
       <button onClick={() => selectHandler(1)}>1</button>
       <Star selected={select > 1}/>
       <button onClick={() => selectHandler(2)}>2</button>
       <Star selected={select > 2}/>
       <button onClick={() => selectHandler(3)}>3</button>
       <Star selected={select > 3}/>
       <button onClick={() => selectHandler(4)}>4</button>
       <Star selected={select > 4}/>
       <button onClick={() => selectHandler(5)}>5</button>
     </div>
  )
}