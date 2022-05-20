import React from 'react'

const Footer = (props) => {
  return (
    <div className="todo-footer">
        <span className="count-todos"><h6>{props.items.length}{props.items.length > 1 ? ' item left' : ' items left'}</h6></span> {/* buatlah sebuah ternary operation di mana apabila props count > 1 maka akan menuliskan text "items left" dan jika props count <= 1 maka akan menuliskan "item left" */}
    </div>
  )
}

export default Footer