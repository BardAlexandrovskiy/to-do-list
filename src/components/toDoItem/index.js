import React from 'react'
import { Container, CheckButton, DeleteButton } from './styles'

export default class ToDoItem extends React.Component {
  handleClickDeleteButton = () => {
    const { id, deleteToDo } = this.props
    deleteToDo(id)
  }

  handleClickCheckButton = () => {
    const { id, checkToDo } = this.props
    checkToDo(id)
  }

  render() {
    const { value, check } = this.props
    return (
      <Container check={check}>
        <CheckButton check={check} onClick={this.handleClickCheckButton}>
          ✓
        </CheckButton>
        {value}
        <DeleteButton onClick={this.handleClickDeleteButton}>✖</DeleteButton>
      </Container>
    )
  }
}
