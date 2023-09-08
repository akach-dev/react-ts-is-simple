import React, {FC, useState} from 'react';

export type DataType = {
  title: string
  value: any
}
type  SelectPropsType = {
  title: string
  data: DataType[]
  callbackValue: (value: any) => void
}

export const Select: FC<SelectPropsType> = ({data, callbackValue, title}) => {

  const [isOpen, setIsOpen] = useState(false)

  const isOpenHandler = () => setIsOpen(!isOpen)
  return (
     <>
       <h3 onClick={isOpenHandler} onBlur={isOpenHandler}>{title}</h3>
       <div style={{
         display: "inline-flex",
         flexDirection: "column",
         gap: '3px',
         padding: '2px 5px',
         alignItems: "center",
         border: isOpen ? '1px solid blue' : ''
       }}>
         {isOpen &&
            data.map(el => {
              const onClickHandler = () => {
                callbackValue(el.title)
                isOpenHandler()
              }
              return <span key={el.title} onClick={onClickHandler}>{el.title}</span>
            })
         }
       </div>
     </>
  );
};
