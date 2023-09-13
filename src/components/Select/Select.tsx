import React, {FC} from 'react';

export type DataType = {
  title: string
  value: any
}
type  SelectPropsType = {
  value: string
  items: DataType[]
  callbackValue: (value: any) => void
}

export const Select: FC<SelectPropsType> = ({items, callbackValue, value}) => {

  const selectValue = items.find(item => item.value === value)

  return (
     <>
       <h3>{selectValue && selectValue.title}</h3>
       <div>
         {
           items.map(el => {
             return <div key={el.title}>{el.title}</div>
           })
         }
       </div>
     </>
  );
};
