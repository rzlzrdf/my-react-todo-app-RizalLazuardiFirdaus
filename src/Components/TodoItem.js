import React from 'react'
const TodoItem = (props) => {
  return (
    <>
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="true" id={`todo-item-check-${props.item.id}`}  />
            <label className="form-check-label" htmlFor={`todo-item-check-${props.item.id}`}>
                {props.item.text}
            </label>
        </div>
    </>
  )
}

export default TodoItem