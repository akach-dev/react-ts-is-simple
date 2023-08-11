import React from "react";
import {TopCarsType} from "../App";

type CarsPropsType = {
  cars: TopCarsType[]
}

export function Cars({cars}: CarsPropsType) {
  return (
     <>
       {
         cars.map((car, index) => (
            <li key={index}> {car.manufacturer}: {car.model} </li>
         ))
       }
     </>
  )
}