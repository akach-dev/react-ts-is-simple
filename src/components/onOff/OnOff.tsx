import React from 'react';

type OnOffPropsType = {
  bulb: boolean
}

export const OnOff = ({bulb}: OnOffPropsType) => {
  return (
     <div className={'onOff'}>
       <span className={bulb ? 'on' : ''}>On</span>
       <span className={!bulb ? 'off' : ''}>Off</span>
       <span className={bulb ? 'on bulb' : 'off bulb'}> </span>
     </div>
  );
};
