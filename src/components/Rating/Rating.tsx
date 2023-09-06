import {Star, ValueType} from "../Star";
import React, {FC} from "react";

type RatingPropsType = {
  value: ValueType
  setValue: (value: ValueType) => void
}


export const Rating: FC<RatingPropsType> = ({setValue, value}) => {

  return (
     <div>
       <Star callback={() => setValue(1)} selected={value > 0}/>
       <Star callback={() => setValue(2)} selected={value > 1}/>
       <Star callback={() => setValue(3)} selected={value > 2}/>
       <Star callback={() => setValue(4)} selected={value > 3}/>
       <Star callback={() => setValue(5)} selected={value > 4}/>
     </div>
  )
}