import React, { useState, useEffect, useRef } from 'react'
import { FormRow, FormRowSelect, Alert } from '../components'
import Wrapper from '../assets/wrappers/DashboardFormPage'


const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null)

  // useEffect(() => {
  //   inputRef.current.focus()
  // })

  const handleChange = (e) => {
      setInput(e.target.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
      })
      setInput('');
  }

  return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit ? "Update your item" : "Add a todo"}
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          // ref={inputRef}
          />
          <button className="todo-button btn edit-btn">{props.edit ? "Update" : "Add Task"}</button>
      </form>
    )
  }

export default TodoForm