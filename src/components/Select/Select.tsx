import React, {FC} from 'react';
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

  const selectedItem = items.find(item => item.value == value)

  return (
     <div className={styles.select}>
       <h3>{selectedItem && selectedItem.title}</h3>
       <div>
         {
           items.map(el => {
             return <div key={el.title}>{el.title}</div>
           })
         }
       </div>
     </div>
  );
};
