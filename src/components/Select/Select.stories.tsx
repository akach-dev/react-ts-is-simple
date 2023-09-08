import {Select} from "./Select";
import {useState} from "react";


export default {
  component: Select
}

const data = [{title: 'Alex', value: 1}, {title: 'Max', value: 2}, {title: 'Oksana', value: 3}]


export const CustomSelect = () => {

  const [value, setValue] = useState('none')


  return <Select title={value} data={data} callbackValue={setValue}/>
}