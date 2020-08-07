import React from "react";
import { connect } from "react-redux";
import {
  inputChangeValue,
  createNewToDo,
  checkAllToDo,
} from "../../actions/index";
import { Input, Container, AllCompletedButton } from "./styles";

class InputCreateNewTask extends React.Component {
  handleChangeInput = (e) => {
    const { inputChangeValue } = this.props;
    const value = e.target.value;
    inputChangeValue(value);
  };

  handlePressInput = (e) => {
    const { createNewToDo, value, inputChangeValue } = this.props;
    if (e.keyCode === 13 && value.trim()) {
      createNewToDo(value);
      inputChangeValue("");
    }
  };

  handleClickCheckAllButton = () => {
    const { checkAllToDo } = this.props;
    checkAllToDo();
  };

  render() {
    const { value, toDoList } = this.props;

    let checkNum = 0;
    let opacityAllCompletedButton = false;

    toDoList.forEach((el) => {
      if (el.check) {
        checkNum += 1;
      }
    });

    if (checkNum === toDoList.length) {
      opacityAllCompletedButton = true;
    }
    return (
      <Container>
        {!!toDoList.length && (
          <AllCompletedButton
            onClick={this.handleClickCheckAllButton}
            opacity={opacityAllCompletedButton}
          >
            ❯
          </AllCompletedButton>
        )}
        <Input
          placeholder="What needs to be done?"
          value={value}
          onChange={this.handleChangeInput}
          onKeyDown={this.handlePressInput}
        />
      </Container>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    value: store.input.value,
    toDoList: store.toDo.toDoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputChangeValue: (value) => dispatch(inputChangeValue(value)),
    createNewToDo: (value) => dispatch(createNewToDo(value)),
    checkAllToDo: () => dispatch(checkAllToDo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputCreateNewTask);
