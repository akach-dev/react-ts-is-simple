import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
  component: Select
}

const data = [{title: 'Alex', value: 1}, {title: 'Max', value: 2}, {title: 'Oksana', value: 3}]
const callbackValue = action('change value')

export const BaseSelect = () => {
  return <Select value={'1'} items={data} callbackValue={callbackValue}/>
}