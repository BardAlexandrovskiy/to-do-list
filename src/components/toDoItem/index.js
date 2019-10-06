import React from 'react'
import { ToDoItemContainer, CheckButton, DeleteButton } from './styles'

export default class ToDoItem extends React.Component {
  handleClickDeleteButton = () => {
    const { id, deleteToDo } = this.props
    console.log(`event: ${id}`)
    deleteToDo(id)
  }

  render() {
    const { value, check } = this.props
    return (
      <ToDoItemContainer>
        <CheckButton check={check}>✓</CheckButton>
        {value}
        <DeleteButton onClick={this.handleClickDeleteButton}>✖</DeleteButton>
      </ToDoItemContainer>
    )
  }
}
