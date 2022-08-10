import React from 'react'
import inactive from "../assets/Images/inactive.svg"
import "./tasksitem.scss"

function TasksItem() {
  return (
    <>
    <li className='tasks__item'>
      <form className='form' action="https://echo.htmlacademy.ru/courses" method="post">
        <input className='form__input' type="text" placeholder='Create new task' />
        <button className='form__btn'>
          <img src={inactive} alt="" />
        </button>
      </form>
    </li>
    <li className="tasks__item">
      <input className='tasks__checkbox' type="checkbox"  />
      <p className="tasks__desc">
      Finish ticket update
      </p>
      <button className="tasks__button1">
      Urgent
      </button>
    </li>
    <li className="tasks__item">
      <input className='tasks__checkbox' type="checkbox"  />
      <p className="tasks__desc">
      Create new ticket example
      </p>
      <button className="tasks__button2">
      New
      </button>
    </li>
    <li className="tasks__item">
      <input defaultChecked className='tasks__checkbox' type="checkbox"  />
      <p className="tasks__desc">
      Update ticket report
      </p>
      <button className="tasks__button3">
      Default
      </button>
    </li>
    </>
  )
}

export default TasksItem