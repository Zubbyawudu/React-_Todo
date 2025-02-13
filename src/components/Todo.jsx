import React , { useState } from 'react'

 function Todo() {
  
  const [todos, setTodos] = useState(["eat", "sleep", "code"])
  const [newTodo , setNewTodo] = useState('')

  function editTodo(e) {
    setNewTodo(e.target.value)
  }
  
  function addTodo(e) {

  }

  function deleteTodo(index) { 

  }

  function moveTodoUp(index) {

  }

  function moveTodoDown(index) {

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