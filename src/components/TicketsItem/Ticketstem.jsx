import React from 'react'
import "./tickets.scss"

function TicketsItem({content , number}) {
  return (
    <li className="tickets__item">
      <span className='tickets__content'>{content}</span>
      <span className='tickets__number'>{number}</span>
    </li>
  )
}

export default TicketsItem