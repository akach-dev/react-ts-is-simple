import React, {FC, useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

export type DataType = {
  title: string
  value: any
}
type  SelectPropsType = {
  value?: string
  items: DataType[]
  onChange: (value: string) => void
}

export const Select: FC<SelectPropsType> = ({items, onChange, value}) => {

  const [active, setActive] = useState(false)
  const [hoveredElementValue, setHoveredElementValue] = useState(value)

  useEffect(() => {
    setHoveredElementValue(value)
  }, [value]);

  const selectedItem = items.find(item => item.value === value)
  const hoveredItem = items.find(item => item.value === hoveredElementValue)

  const toggleItems = () => setActive(!active)

  const onItemClick = (value: string) => {
    onChange(value)
    toggleItems()
  }

  const onBlurHandler = () => {
    if (active) toggleItems()
  };
  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].value === hoveredElementValue) {
        if (items[i + 1]) {
          onChange(items[i + 1].value)
          break
        }
      }
    }
  };
  return <>
    {/*<select name="" id="">*/}
    {/*  <option value="">Alex</option>*/}
    {/*  <option value="">Max</option>*/}
    {/*  <option value="">Oksana</option>*/}
    {/*</select>*/}
    <div className={styles.select} tabIndex={0} onBlur={onBlurHandler} onKeyUp={onKeyUp}>

      <span onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
      {
         active && (
            <div className={styles.items}>
              {
                items.map(el => {
                  return <div
                     onMouseEnter={() => setHoveredElementValue(el.value)}
                     onClick={() => onItemClick(el.value)}
                     key={el.title}
                     className={styles.item + ' ' + (hoveredItem === el ? styles.selected : '')}>
                    {el.title}
                  </div>
                })
              }
            </div>
         )
      }

    </div>
  </>
};
