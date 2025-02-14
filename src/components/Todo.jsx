import React , { useState } from 'react'

 function Todo() {
  
  const [todos, setTodos] = useState([])
  const [newTodo , setNewTodo] = useState('')

  function editTodo(e) {
    setNewTodo(e.target.value)
  }
  
  function addTodo(e) {
    
    if (newTodo.trim() !== '') {
      setTodos(todos => [...todos, newTodo])
      setNewTodo('');
      
    }
    
  }

  function deleteTodo(index) { 
    setTodos(todos.filter((todo, i) => i !== index))

  }

  function moveTodoUp(index) {
    if (index > 0) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index - 1]] = [updatedTodos[index - 1], updatedTodos[index]];
      setTodos(updatedTodos);
    }
  }

  function moveTodoDown(index) {
    if (index < todos.length - 1) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index + 1]] = [updatedTodos[index + 1], updatedTodos[index]];
      setTodos(updatedTodos);
    }
  }



  return (
    <div className = "Todo-List">
      <h1>TO - DO - LIST</h1>

      <div>
        <input type="text" placeholder='Enter Todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button className='add-button' onClick={addTodo}>Add</button>
      </div>

      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className= "text"></span>{todo}
            <button className='delete-button' onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => moveTodoUp(index)}>👆 </button>
            <button onClick={() => moveTodoDown(index)}>👇 </button>
          </li>
        ))}
      </ol>










    </div>
  )
}

export default Todo