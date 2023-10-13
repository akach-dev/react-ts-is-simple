import {useCallback, useEffect, useMemo, useState} from "react";

export default {
  title: 'useEffect demo'
}


export const SimpleExample1 = () => {
  const [counter, setCounter] = useState(0)
  const [fake, setFake] = useState(1)
  console.log('Example1')

  useEffect(() => {
    console.log('useEffect counter')
    document.title = counter.toString()
  }, [counter]);


  return <div>
    <button onClick={() => setFake(fake + 1)}>+ {counter} {fake} </button>
  </div>

}
export const SetTimeoutExample1 = () => {
  const date = new Date()
  const hour = date.getHours()
  const minutes = date.getMinutes()

  const [seconds, setSeconds] = useState(date.getSeconds())
  console.log(seconds)

  useEffect(() => {


    const interval = setInterval(() => {
      console.log('setInterval')
      const updateSeconds = new Date().getSeconds()
      setSeconds(updateSeconds)
      document.title = `${hour}:${minutes}:${seconds + 1}`
    }, 1000)

    return () => {
      clearInterval(interval)
    }


  }, [hour, minutes, seconds]);


  return <div>
    {`${hour}:${minutes}:${seconds}`}
  </div>

}


