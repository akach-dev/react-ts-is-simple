import {Clock} from "./Clock";
import {useState} from "react";
import {AnalogClock} from "./AnalogClock";

export default {
  title: 'Clock',
}

export const BaseDigitalExample = () => {
  return <Clock mode={'digital'}/>
}
export const BaseAnatolExample = () => {
  return <Clock mode={'analog'}/>
}





