import React, { useState, useEffect } from 'react'
import '../assets/css/index.css'
import Form from './Form'
import TodoList from './TodoList'

const Note = (props) => {
  useEffect(() => {
    const filterHandler = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
        default:
          setFilteredTodos(todos);
          break;
      }
    }
  }, [todos, status]);

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  // Functions
  
  const saveLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos" === null)) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }

  return (
    <div className="note">
        {/* <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>DELETE</button> */}
        <header>
          <h1>Ed's Todo List {inputText}</h1>
        </header>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
        />
    </div>
  )
}

export default Note