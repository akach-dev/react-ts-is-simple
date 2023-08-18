import React from "react";

export type TopCarsType = {
  manufacturer: string
  model: string
}
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