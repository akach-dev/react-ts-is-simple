type StarPropsType = {
  selected: boolean
  callback: () => void
}

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5


export function Star({selected, callback}: StarPropsType) {
  return <span onClick={callback}> {selected ? <b>&#10032;</b> : <small>&#10032;</small>} </span>

}