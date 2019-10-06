import React from 'react'
import { MainAppDiv, H1, AppBodyDiv, ToDoList } from './styles'
import { connect } from 'react-redux'
import InputCreateNewTask from '../../components/input/index'
import ToDoItem from '../../components/toDoItem/index'
import {
  inputChangeValue,
  createNewToDo,
  deleteToDo,
} from '../../actions/index'

class App extends React.Component {
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
    } = this.props
    console.log(toDoList)
    return (
      <MainAppDiv>
        <H1>todos</H1>
        <AppBodyDiv>
          <InputCreateNewTask
            value={inputValue}
            inputChangeValue={inputChangeValue}
            createNewToDo={createNewToDo}
          />
          <ToDoList>
            {toDoList.map(element => {
              return (
                <ToDoItem
                  value={element.value}
                  key={element.id}
                  check={element.check}
                  deleteToDo={deleteToDo}
                  id={element.id}
                />
              )
            })}
          </ToDoList>
        </AppBodyDiv>
      </MainAppDiv>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    inputValue: store.input.value,
    toDoList: store.toDo.toDoList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputChangeValue: value => dispatch(inputChangeValue(value)),
    createNewToDo: value => dispatch(createNewToDo(value)),
    deleteToDo: id => dispatch(deleteToDo(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
