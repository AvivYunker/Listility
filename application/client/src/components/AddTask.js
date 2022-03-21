import { useAppContext } from "../context/appContext"
import React, { useState, useEffect, useRef } from 'react'
import { FormRow, FormRowSelect, Alert } from '../components'
import Wrapper from '../assets/wrappers/DashboardFormPage'

const AddTask = (props) => {
    const {
        isLoading,
        isEditing,
        showAlert,
        displayAlert,
        clearValues,
        createTask,
        editTask,
        checkTask,
        deleteTask,
} = useAppContext()

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isEditing) {
            editTask()
            return
        }
        createTask()
    }

    const handleChange = (e) => {
        setInput(e.target.value)
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
          ref={inputRef}
          />
          <button className="todo-button btn edit-btn">{props.edit ? "Update" : "Add Task (!!!)"}</button>
      </form>
    )
}

export default AddTask