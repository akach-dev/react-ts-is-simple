import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


export default {
  component: Select
}

const data = [
  {title: 'Alex', value: '1'}, {title: 'Max', value: '2'}, {title: 'Oksana', value: '3'}]
const callbackValue = action('change value')

export const BaseSelect = () => {
  const [value, setValue] = useState('2')

  return <Select value={value} items={data} onChange={setValue}/>
}
export const WithValueSelect = () => {
  const [value, setValue] = useState('')

  return <Select value={value} items={data} onChange={setValue}/>
}