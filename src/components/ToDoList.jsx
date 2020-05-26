import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
  render() {
    return (
      <>
        <div>From TODO list</div>
        <ToDoItem></ToDoItem>
      </>
    )
  }
}

export default ToDoList
