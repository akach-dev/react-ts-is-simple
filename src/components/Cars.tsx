import React from "react";
import {TopCarsType} from "../App";

type CarsPropsType = {
  cars: TopCarsType[]
}

export function Cars({cars}: CarsPropsType) {
  return (
     <>
       {
         cars.map(car => (
            <li> {car.manufacturer}: {car.model} </li>
         ))
       }
     </>
  )
}