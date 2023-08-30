import {Star, ValueType} from "./Star";
import React, {FC} from "react";

type RatingPropsType = {
  value: ValueType
  setValue: (value: ValueType) => void
}


export const Rating: FC<RatingPropsType> = ({setValue, value}) => {

  return (
     <div>
       <Star value={1} setSelect={setValue} selected={value > 0}/>
       <Star value={2} setSelect={setValue} selected={value > 1}/>
       <Star value={3} setSelect={setValue} selected={value > 2}/>
       <Star value={4} setSelect={setValue} selected={value > 3}/>
       <Star value={5} setSelect={setValue} selected={value > 4}/>
     </div>
  )
}