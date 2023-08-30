import React from "react";

type  AccordionTitlePropsType = {
  title: string
  callback: () => void
}

export function AccordionTitle({title, callback}: AccordionTitlePropsType) {

  return <h3 onClick={callback}>{title}</h3>
}

