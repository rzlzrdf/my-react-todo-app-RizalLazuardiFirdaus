import React from "react";

function App() {
  const items = [
    {
     id: 1,
     text: 'Membuang sampah',
     completed: false
   },
   {
     id: 2,
     text: 'Membuat rotu',
     completed: false
   },
   {
     id: 3,
     text: 'Belajar React',
     completed: false
   }
 ];
 const title = 'Things to do';


  return (
    <div className="container">
    <div className="row">
      <div className="todo-list">
        <h1>{title}</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="todo-item-check-1" />
              <label className="form-check-label" htmlFor="todo-item-check-1">Membuang sampah</label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="todo-item-check-2" />
              <label className="form-check-label" htmlFor="todo-item-check-2">Membeli roti</label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="todo-item-check-3" />
              <label className="form-check-label" htmlFor="todo-item-check-3">Membuat kopi</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default App;
