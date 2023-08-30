type StarPropsType = {
  selected: boolean
  setSelect: (select: ValueType) => void
  value: ValueType

}

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5


export function Star({selected, setSelect, value}: StarPropsType) {
  return <span onClick={() => setSelect(value)}> {selected ? <b>&#10032;</b> : <small>&#10032;</small>} </span>

}