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
    setActive(false)
  };
  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      for (let i = 0; i < items.length; i++) {
        if (items[i].value === hoveredElementValue) {
          const contenderElement = e.key === "ArrowDown" ? items[i + 1] : items[i - 1]
          if (contenderElement) {
            onChange(contenderElement.value)
            return
          }
        }
        if (!selectedItem) {
          onChange(items[0].value)
        }
      }
    }
    if (e.key === "Escape" || e.key === "Enter") onBlurHandler()

  };
  return <>
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
