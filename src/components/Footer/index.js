import React from "react";
import { Container, AllDelete, TasksLeft } from "./styles";
import { connect } from "react-redux";
import { deleteCompleted } from "../../actions";

const Footer = ({ deleteCompleted, toDoList }) => {
  let check = false;
  let counter = 0;

  toDoList.forEach((el) => {
    if (el.check) {
      check = true;
    } else counter += 1;
  });

  return (
    !!toDoList.length && (
      <Container>
        <TasksLeft>tasks left: {counter}</TasksLeft>
        {check && (
          <AllDelete onClick={() => deleteCompleted()}>
            delete completed
          </AllDelete>
        )}
      </Container>
    )
  );
};

const mapStateToProps = (store) => {
  return {
    toDoList: store.toDo.toDoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCompleted: () => dispatch(deleteCompleted()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
