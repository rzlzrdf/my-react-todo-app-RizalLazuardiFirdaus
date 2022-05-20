import React from 'react'
import Header from './Header';
import TodoItem from './TodoItem';
import Footer from './Footer';

const TodoList = (props) => {

  return (
    <>
      <Header title={props.title} addNewItem={props.addNewItem} />
      <ul className="list-group list-group-flush">
        {props.items.map((item, index) => (
          <li className="list-group-item">
            <TodoItem item={item} key={index} />
          </li>
        ))}
      </ul>
      <Footer count={props.items} />
    </>
  )
}

export default TodoList