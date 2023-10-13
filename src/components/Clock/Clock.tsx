import {FC, useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export const dateAddZero = (date: number) => date < 10 ? '0' + date : date

export type ClockViewPropsType = {
  date: Date
}

type ClockPropsType = {
  mode: 'digital' | 'analog'
}

export const Clock: FC<ClockPropsType> = ({mode}) => {
  const [date, setDate] = useState(new Date())


  useEffect(() => {
    const interval = setInterval(() => {
      console.log('TICK')
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, []);


  return (
     <div>
       {mode === 'digital'
          ? <DigitalClockView date={date}/>
          : <AnalogClockView date={date}/>
       }

     </div>
  );
};


