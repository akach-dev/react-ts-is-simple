import React, {FC, useState} from 'react';
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

  const selectedItem = items.find(item => item.value === value)
  const hoveredItem = items.find(item => item.value === hoveredElementValue)

  const toggleItems = () => setActive(!active)

  const onItemClick = (value: string) => {
    onChange(value)
    toggleItems()
  }

  return (
     <div className={styles.select}>

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
  );
};
