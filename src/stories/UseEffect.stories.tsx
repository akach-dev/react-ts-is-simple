import {useCallback, useEffect, useMemo, useState} from "react";

export default {
  title: 'useEffect demo'
}


export const Example1 = () => {
  const [counter, setCounter] = useState(0)
  const [fake, setFake] = useState(1)
  console.log('Example1')

  useEffect(() => {
    console.log('useEffect')
    document.title = counter.toString()
  }, [counter]);


  return <div>
    <button onClick={() => setFake(fake + 1)}>+ {counter} {fake} </button>
  </div>

}


