import React, {useState} from 'react';

type OnOffPropsType = {
  // bulb: boolean
}

export const OnOff = (props: OnOffPropsType) => {

  const [bulb, setBulb] = useState(false)

  const onHandler = () => setBulb(true)
  const offHandler = () => setBulb(false)

  return (
     <div className={'onOff'}>
       <button
          onClick={onHandler}
          className={bulb ? 'on' : ''}>On
       </button>
       <button
          onClick={offHandler}
          className={!bulb ? 'off' : ''}>Off
       </button>
       <span className={bulb ? 'on bulb' : 'off bulb'}> </span>
     </div>
  );
};
