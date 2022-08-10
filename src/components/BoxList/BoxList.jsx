import React from 'react'
import "./BoxList.scss"

function BoxList({children}) {
  return (
    <ul className="box__list">
        {children}
    </ul>
  )
}

export default BoxList