import React from 'react';
import './App.css';
import {useState} from 'react'
function App() {
    const [toDOS,setTodos]=useState([])
    const [toDo,setTodo] = useState('')
    
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {Date().toLocaleString()} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDOS,{id:Date.now(),text :toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
          { toDOS.map((shahil)=>{

          return (<div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{shahil}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
          })
        }</div>
    </div>
  );
}

export default App;