import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todoActions } from "../store/todos/todoSlice";

export const Todo = ({ todo, setEditVisibility, setInputState, setTodoId }) => {
  const dispatch = useDispatch();
  const deleteTodoHanler = (event) => {
    event.preventDefault();
    dispatch(todoActions.deleteToDo(todo.id));
  };

  const deleteAllTodoHandler = (event) => {
    event.preventDefault();
    dispatch(todoActions.deleteAllToDo());
  };

  const editTodoHanler = (event) => {
    event.preventDefault();
    setInputState(todo.todo);
    setTodoId(todo.id);
    setEditVisibility(true);
  };

  const checkedInputHanler = () => {
    dispatch(
      todoActions.toggleToDo({ id: todo.id, completed: !todo.completed })
    );
  };
  return (
    <Container>
      <TitleContainer>
        <StyledInput type="checkbox" onClick={checkedInputHanler} />
        <Title
          style={{ textDecoration: todo.completed ? "line-through" : null }}
        >
          {todo.todo}
        </Title>
      </TitleContainer>
      <ContainerButton>
        <StyledButton onClick={editTodoHanler}>EDIT</StyledButton>
        <StyledButton onClick={deleteTodoHanler}>X</StyledButton>
        <StyledButton onClick={deleteAllTodoHandler}>X ALL</StyledButton>
      </ContainerButton>
    </Container>
  );
};

const Container = styled.form`
  width: 30rem;
  margin: 0.8rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #54035b;
  padding: 1rem;
  border-radius: 0.3rem;
  color: #fff;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;
const TitleContainer = styled.div`
  display: flex;
`;
const Title = styled.p`
  margin-left: 1rem;
  font-size: 1.3rem;
`;
const ContainerButton = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-around;
`;
const StyledButton = styled.button`
  padding: 0.5rem;
  background-color: black;
  color: #da1818;
  font-weight: 800;
  border: none;
  border-radius: 0.3rem;
  :hover {
    color: black;
    background-color: #fff;
  }
`;
const StyledInput = styled.input`
  color: black;
`;
