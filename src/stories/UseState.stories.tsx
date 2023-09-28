import {useCallback, useMemo, useState} from "react";

export default {
  title: 'useState demo'
}

const generateNum = () => {
  console.log('generateNum')
  return 233446557
}


export const Example1 = () => {

  // const initValue = useCallback(generateNum, [])
  // console.log('Example1')
  const [counter, setCounter] = useState(generateNum)
  console.log(counter)


  const onClickHandler = () => {
    setCounter(prevState => prevState + 1)
    console.log(counter)
    setCounter(prevState => prevState + 1)
    console.log(counter)
    setCounter(prevState => prevState + 1)
    console.log(counter)
    setCounter(prevState => prevState + 1)
    console.log(counter)
    setCounter(prevState => prevState + 1)
    console.log(counter)
    setCounter(prevState => prevState + 1)
    console.log(counter)
  }


  return <div>
    <button onClick={onClickHandler}>+ {counter}</button>
  </div>

}


