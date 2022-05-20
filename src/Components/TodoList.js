import React from 'react'
import Header from './Header'
import TodoItem from './TodoItem'
import Footer from './Footer'
import PaginateList from './Pagination'

const Todolist = (props) => {

    return (
        <div className="todo-list">
         <Header title={props.title.toUpperCase()}  addNewItem={props.addNewItem}/>
        <ul className="list-group list-group-flush">
            {props.items.map(item => (
            <li className="list-group-item">
                <TodoItem item={item}/>
            </li>
            ))}
        </ul>
        <PaginateList items={props.items} initialPage={1} itemPerPage={2} />
        <Footer items={props.items} />
        </div>
    )
}

export default Todolist 