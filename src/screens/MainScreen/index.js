import React from 'react'
import { FixContainer, Logo, MainContainer, ToDoList } from './styles'
import { connect } from 'react-redux'
import InputCreateNewTask from '../../components/Input'
import ToDoItem from '../../components/ToDoItem'
import {
  inputChangeValue,
  createNewToDo,
  deleteToDo,
  checkToDo,
  checkAllToDo,
} from '../../actions/index'

class MainScreen extends React.Component {
  componentDidUpdate = () => {
    const { toDoList } = this.props
    localStorage.setItem('todos', JSON.stringify({ toDoList }))
  }
  render() {
    const {
      inputValue,
      inputChangeValue,
      toDoList,
      createNewToDo,
      deleteToDo,
      checkToDo,
      checkAllToDo,
    } = this.props
    return (
      <FixContainer>
        <Logo>todos</Logo>
        <MainContainer>
          <InputCreateNewTask
            value={inputValue}
            inputChangeValue={inputChangeValue}
            createNewToDo={createNewToDo}
            toDoList={toDoList}
            checkAllToDo={checkAllToDo}
          />
          <ToDoList>
            {toDoList.map((element) => {
              return (
                <ToDoItem
                  value={element.value}
                  key={element.id}
                  check={element.check}
                  deleteToDo={deleteToDo}
                  id={element.id}
                  checkToDo={checkToDo}
                />
              )
            })}
          </ToDoList>
        </MainContainer>
      </FixContainer>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    inputValue: store.input.value,
    toDoList: store.toDo.toDoList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChangeValue: (value) => dispatch(inputChangeValue(value)),
    createNewToDo: (value) => dispatch(createNewToDo(value)),
    deleteToDo: (id) => dispatch(deleteToDo(id)),
    checkToDo: (id) => dispatch(checkToDo(id)),
    checkAllToDo: () => dispatch(checkAllToDo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
