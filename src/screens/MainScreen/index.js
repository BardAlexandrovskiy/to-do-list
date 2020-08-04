import React from "react";
import { FixContainer, Logo, MainContainer, ToDoList } from "./styles";
import { connect } from "react-redux";
import InputCreateNewTask from "../../components/Input";
import ToDoItem from "../../components/ToDoItem";

class MainScreen extends React.Component {
  componentDidUpdate = () => {
    const { toDoList } = this.props;
    localStorage.setItem("todos", JSON.stringify({ toDoList }));
  };
  render() {
    const { toDoList } = this.props;
    return (
      <FixContainer>
        <Logo>todos</Logo>
        <MainContainer>
          <InputCreateNewTask />
          <ToDoList>
            {toDoList.map((element) => {
              return (
                <ToDoItem
                  value={element.value}
                  key={element.id}
                  check={element.check}
                  id={element.id}
                />
              );
            })}
          </ToDoList>
        </MainContainer>
      </FixContainer>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    toDoList: store.toDo.toDoList,
  };
};

export default connect(mapStateToProps)(MainScreen);
