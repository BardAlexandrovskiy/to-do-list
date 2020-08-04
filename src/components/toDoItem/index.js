import React from "react";
import { connect } from "react-redux";
import { Container, CheckButton, DeleteButton } from "./styles";
import { deleteToDo, checkToDo } from "../../actions";

class ToDoItem extends React.Component {
  handleClickDeleteButton = () => {
    const { id, deleteToDo } = this.props;
    deleteToDo(id);
  };

  handleClickCheckButton = () => {
    const { id, checkToDo } = this.props;
    checkToDo(id);
  };

  render() {
    const { value, check } = this.props;
    return (
      <Container check={check}>
        <CheckButton check={check} onClick={this.handleClickCheckButton}>
          ✓
        </CheckButton>
        {value}
        <DeleteButton onClick={this.handleClickDeleteButton}>✖</DeleteButton>
      </Container>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    toDoList: store.toDo.toDoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteToDo: (id) => dispatch(deleteToDo(id)),
    checkToDo: (id) => dispatch(checkToDo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
