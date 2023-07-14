import React from 'react';


type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating({value}: RatingPropsType) {
  switch (value) {
    case 1 :
      return <div>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
      </div>

    case 2 :
      return <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
      </div>

    case 3 :
      return <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
      </div>

    case 4 :
      return <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
      </div>

    case 5 :
      return <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
      </div>

    default :
      return <div>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
      </div>
  }
}

type StarPropsType = {
  selected: boolean
}

function Star({selected}: StarPropsType) {
  return selected ? <span><b>star </b></span> : <span>star </span>
}

