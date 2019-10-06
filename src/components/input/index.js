import React from 'react'
import { Input, InputContainer } from './styles'

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

  render() {
    const { value } = this.props
    return (
      <InputContainer>
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
