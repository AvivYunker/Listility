import React, { Component } from 'react'
import Todo from './Task'
import { Consumer } from '../context'

export default class Tasks extends Component {
  render() {
    return (
        <Consumer>{value => {
            const { todos } = value
            return todos.map(t => <Todo todo={t} key={t.id}></Todo>)
        }}</Consumer>
    )
  }
}