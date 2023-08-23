import React from 'react';

type OnOffPropsType = {
  // bulb: boolean
}

export const OnOff = (props: OnOffPropsType) => {

  let bulb

  const onHandler = () => bulb = true
  const offHandler = () => bulb = true


  return (
     <div className={'onOff'}>
       <span
          onClick={}
          className={bulb ? 'on' : ''}>On</span>
       <span
          onClick={}
          className={!bulb ? 'off' : ''}>Off</span>
       <span className={bulb ? 'on bulb' : 'off bulb'}> </span>
     </div>
  );
};
