import React from 'react'
import "./item.scss"

function Item({text, number}) {
  return (
    <li className="main-list__item">
      <p className="main-list__text">
      {text}
      </p>
      <p className="main-list__number">
      {number}
      </p>
    </li>
  )
}

export default Item