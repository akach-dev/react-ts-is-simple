import React from "react";

type  AccordionTitlePropsType = {
  title: string
}

export function UnControlledAccordionTitle({title}: AccordionTitlePropsType) {
  return <h3>{title}</h3>
}

