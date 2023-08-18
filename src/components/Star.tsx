type StarPropsType = {
  selected: boolean
}

export function Star({selected}: StarPropsType) {
  return (
     <>
       {
         selected ?
            (
               <span><b>&#10032;</b></span>
            ) : (
               <span>&#10032;</span>

            )
       }
     </>
  )
}