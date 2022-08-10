import React from 'react'
import "./BoxItem.scss"

function BoxItem({text , number}) {
  return (
    <li className='box__item'>
      <p className="box__text5">
        {text}
      </p>
      <p className="box__number">
        {number}
      </p>
    </li>
  )
}

export default BoxItem