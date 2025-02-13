import React , { useState } from 'react'

 function Todo() {
  
  const [todos, setTodos] = useState([])
  const [newTodo , setNewTodo] = useState('')

  function editTodo(e) {

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
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  )
}

export default Todo