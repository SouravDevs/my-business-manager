import React from 'react'
import './TodoList.css'

function TodoList({database}) {
  return (
    <div className='todo-list'>
        {
          database.map((data, i) => (
            <label key={i}>{data.text}</label>
          ))
        }
    </div>
  )
}

export default TodoList