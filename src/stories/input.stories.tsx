import {ChangeEvent, useRef, useState} from "react";


export default {
  title: 'input'
}

export const UnControlledInput = () => <input type="text"/>
export const TrackValueOfUnControlledInput = () => {
  const [value, setValue] = useState('')
  return <>
    <input onChange={e => setValue(e.currentTarget.value)} type="text"/>
    {value}
  </>
}
export const GetValueOfUnControlledInputByButtonPress = () => {

  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value);
  }
  return <>
    <input ref={inputRef}/>
    <button onClick={onClickHandler}>save</button>
    - actual value : {value}
  </>
}
export const ControlledInputWithFixedValue = () => <input type="text" value={'Max'}/>
export const ControlledInput = () => {

  const [parentValue, setParentValue] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value)
  }

  return <input type="text" value={parentValue}
     // onChange={action('want to change')}
                onChange={onChangeHandler}
  />

}
export const ControlledCheckbox = () => {

  const [parentValue, setParentValue] = useState(true)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
  }

  return <input type="checkbox" checked={parentValue}
     // onChange={action('want to change')}
                onChange={onChangeHandler}
  />

}
export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>('2')

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value)
  }
  return <select value={parentValue} onChange={onChangeHandler}>
    <option>none</option>
    <option value="1">Minsk</option>
    <option value="2">Moscow</option>
    <option value="3">Kiev</option>
  </select>
}
