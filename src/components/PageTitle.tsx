import React from "react";


type  PageTitlePropsType = {
  title: string
}

export function PageTitle({title}: PageTitlePropsType) {
  return <h2>
    {
      title
    }
  </h2>
}