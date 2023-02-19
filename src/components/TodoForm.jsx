import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActions } from "../store/todos/todoSlice";

export const TodoForm = ({
  editVisibility,
  setEditVisibility,
  inputState,
  setInputState,
  todoId,
}) => {
  const dispatch = useDispatch();
  const changeInputHandler = (event) => {
    setInputState(event.target.value);
  };

  const addClickHandler = (event) => {
    event.preventDefault();
    const todoObj = {
      id: Date.now().toString(),
      todo: inputState,
      completed: false,
    };
    if (inputState) {
      dispatch(todoActions.addToDo(todoObj));
      setInputState("");
    }
  };
  const editClickHandler = (event) => {
    event.preventDefault();
    if (inputState) {
      const editTodoObj = {
        id: todoId,
        text: inputState,
      };
      dispatch(todoActions.editToDo(editTodoObj));
      setEditVisibility(false);
      setInputState("");
    }
  };

  return (
    <FormContainer>
      <StyledInput onChange={changeInputHandler} value={inputState} />
      {editVisibility ? (
        <StyledButton onClick={editClickHandler}>EDIT TODO</StyledButton>
      ) : (
        <StyledButton onClick={addClickHandler}>ADD TODO</StyledButton>
      )}
    </FormContainer>
  );
};

const FormContainer = styled.form`
  margin: 3rem auto;
  background-color: #141355;
  width: 30rem;
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
const StyledInput = styled.input`
  padding: 0.5rem;
  font-size: 1.4rem;
  :focus {
    background-color: #161516;
    color: #fff;
  }
`;
const StyledButton = styled.button`
  padding: 0.5rem;
  background-color: #f2f6f8;
  border: none;
  font-size: 1.2rem;
  color: #054d14;
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
  border-radius: 0.5rem;
  :hover {
    color: #f2f6f8;
    background-color: #054d14;
  }
`;
