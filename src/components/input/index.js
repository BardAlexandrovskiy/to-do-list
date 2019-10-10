import React from 'react'
import { Input, InputContainer, AllCompletedButton } from './styles'

export default class InputCreateNewTask extends React.Component {
  handleChangeInput = e => {
    const { inputChangeValue } = this.props
    const value = e.target.value
    inputChangeValue(value)
  }

  handlePressInput = e => {
    const { createNewToDo, value, inputChangeValue } = this.props
    if (e.keyCode === 13 && value.trim()) {
      createNewToDo(value)
      inputChangeValue('')
    }
  }

  handleClickCheckAllButton = () => {
    const { checkAllToDo } = this.props
    checkAllToDo()
  }

  render() {
    const { value, toDoList } = this.props
    return (
      <InputContainer>
        {toDoList.length ? (
          <AllCompletedButton onClick={this.handleClickCheckAllButton}>
            ❯
          </AllCompletedButton>
        ) : null}
        <Input
          placeholder="What needs to be done?"
          value={value}
          onChange={this.handleChangeInput}
          onKeyDown={this.handlePressInput}
        />
      </InputContainer>
    )
  }
}
