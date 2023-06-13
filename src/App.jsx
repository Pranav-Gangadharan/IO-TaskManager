import './App.css'
import React, { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    { id: 1294, name: "javascript notes", completed: false },
    { id: 9739, name: "git notes", completed: true },
    { id: 6478, name: "react tutorial", completed: false },
  ]);
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks((tasks.filter(task => id !== task.id)))
  }

  return (
    <div className='App'>
      <h1>Tasks List</h1>
      <ul >
        <button className='trigger' onClick={()=> setShow(!show)}>Toggle</button>
        {show && tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
            <input type="checkbox" name="taskCheck" id="taskCheck" />
            <span>{task.name}</span>
            <button className='delete' onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App