import {FC} from "react";
import {ClockViewPropsType, dateAddZero} from "./Clock";

export const DigitalClockView: FC<ClockViewPropsType> = ({date}) => {
  return <>
    <span>{dateAddZero(date.getHours())}:</span>
    <span>{dateAddZero(date.getMinutes())}:</span>
    <span>{dateAddZero(date.getSeconds())}</span>
  </>
}