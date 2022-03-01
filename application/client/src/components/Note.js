import React, { useState, useEffect } from "react";
// import "./App.css";
import Form from './Form';
import TodoList from "./TodoList";

const Note = () => {
  // USE EFFECT
  useEffect(() => {
    console.log("hey");
  }, []);
  // State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // Functions
  const filterHandler = () => {
    switch(status) {
      case 'complete':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Ed's Todo list</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  )
}

export default Note
//1:21:42 / 1:33:52