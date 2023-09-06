import {Rating} from "./Rating";
import {useState} from "react";
import {ValueType} from "../Star";

export default {
  component: Rating
}

export const EmptyRating = () => <Rating value={0} setValue={a => a}/>
export const Rating1 = () => <Rating value={1} setValue={a => a}/>
export const Rating2 = () => <Rating value={2} setValue={a => a}/>
export const Rating3 = () => <Rating value={3} setValue={a => a}/>
export const Rating4 = () => <Rating value={4} setValue={a => a}/>
export const Rating5 = () => <Rating value={5} setValue={a => a}/>
export const ChangeRating = () => {

  const [rating, setRating] = useState<ValueType>(5)

  return <Rating value={rating} setValue={setRating}/>
}