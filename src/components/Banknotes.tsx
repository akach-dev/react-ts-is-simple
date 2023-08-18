import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";

export type MoneyType = {
  banknote: FilterType
  value: number
  number: string
}
type FilterType = 'all' | 'Dollars' | 'RUBLES'

export function Banknotes() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [money, setMoney] = useState<MoneyType[]>([
    {banknote: 'Dollars', value: 100, number: ' a1234567890'},
    {banknote: 'Dollars', value: 50, number: ' z1234567890'},
    {banknote: 'RUBLES', value: 100, number: ' w1234567890'},
    {banknote: 'Dollars', value: 100, number: ' e1234567890'},
    {banknote: 'Dollars', value: 50, number: ' c1234567890'},
    {banknote: 'RUBLES', value: 100, number: ' r1234567890'},
    {banknote: 'Dollars', value: 50, number: ' x1234567890'},
    {banknote: 'RUBLES', value: 50, number: ' v1234567890'},
  ])

  let filterMoney = money

  switch (filter) {
    case "Dollars":
      filterMoney = money.filter(m => m.banknote === 'Dollars')
      break
    case "RUBLES":
      filterMoney = money.filter(m => m.banknote === 'RUBLES')
      break
  }

  const filterDollarsHandler = () => setFilter('Dollars')
  const filterRUBLESHandler = () => setFilter('RUBLES')
  const allMoneyHandler = () => setFilter('all')


  return (
     <div className="App">
       <ul>
         {
           filterMoney.map(m => (
              <li key={m.number}>
                <span>{m.banknote}</span>
                <span>{m.value}</span>
              </li>
           ))
         }
       </ul>
       <Button title={"Dollars"} callback={filterDollarsHandler}/>
       <Button title={"RUBLES"} callback={filterRUBLESHandler}/>
       <Button title={"All"} callback={allMoneyHandler}/>
     </div>
  );
}

