import React from 'react'

const Footer = (props) => {
  return (
    <div className="todo-footer">
         <span className="count-todos">{props.count}</span>
        {props.count > 1 ? ' items left' : ' item left'}
    </div>
  )
}

export default Footer