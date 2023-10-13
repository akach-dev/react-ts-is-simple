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
export const SetIntervalExample = () => {
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

export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(0)
  console.log('Component rendered ' + counter)

  useEffect(() => {
    console.log('useEffect occurred ' + counter)

    return () => {
      console.log('RESET CLEAN UP ' + counter)
    }
  }, [counter]);


  const increment = useCallback(() => {
    setCounter(counter + 1)


  }, [counter])

  return <div>

    <button onClick={increment}>  {counter} +</button>
  </div>

}
export const KeyTrackerEffectExample = () => {

  const [text, setText] = useState('')

  console.log('Component rendered ' + text)

  useEffect(() => {
    let handler = (e: KeyboardEvent) => {
      console.log(e.key)
      setText(prevState => prevState + e.key)
    }
    window.document.addEventListener('keypress', handler)

    return () => {
      window.document.removeEventListener('keypress', handler)
    }
  }, []);

  return <>{text}</>
}
export const SetTimeoutExample = () => {
  const [text, setText] = useState('')


  useEffect(() => {
    const timeout = setTimeout(() => {
      setText('SetTimeoutExample')
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [text]);

  return <>{text}</>
}

