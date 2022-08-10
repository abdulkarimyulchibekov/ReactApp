import React from 'react'
import TasksItem from '../../TasksItem/TasksItem'
import "./tasks.scss"

function Tasks() {
  return (
    <div className='tasks'>
			<div className='tasks__top'>
				<div className='tasks__left'>
					<p className='tasks__header'>Tasks</p>
          <span className='tasks__och'>Today</span>
				</div>
        <p className="tasks__btn">
        View details
        </p>
			</div>
      <ul className='tasks__list'>
        <TasksItem />
      </ul>
		</div>
  )
}

export default Tasks