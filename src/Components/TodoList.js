import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Pagination from "./Pagination";

const Todolist = (props) => {

    return (
        <div className="todo-list">
            <Header title={props.title.toUpperCase()}  addNewItem={props.addNewItem}/>
                <ul className="list-group list-group-flush">
                    <Pagination items={props.items} initialPage={1} itemPerPage={2} />
                </ul>
            <Footer count={props.items.length}/>
        </div>  
    )
}

export default Todolist 