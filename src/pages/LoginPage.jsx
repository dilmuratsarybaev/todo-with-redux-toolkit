import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { authActions } from "../store/auth/authSlice";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const changeInputsHandler = (name) => {
    return (event) => {
      setFormState((prevState) => ({
        ...prevState,
        [name]: event.target.value,
      }));
    };
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formState.email && formState.password) {
      dispatch(authActions.logIn(formState.email));
    }
    navigate("/todos");
  };
  return (
    <FormContainer onSubmit={submitHandler}>
      <h3>Login Page</h3>
      <StyledInput
        type="email"
        value={formState.email}
        onChange={changeInputsHandler("email")}
      />
      <StyledInput
        type="password"
        value={formState.password}
        onChange={changeInputsHandler("password")}
      />
      <StyledButton>LOG IN</StyledButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  width: 30rem;
  padding: 2rem;
  margin: 3rem auto;
  background-color: #a8acae;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  text-align: center;
`;
const StyledInput = styled.input`
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: 1.2rem;
`;
const StyledButton = styled.button`
  padding: 0.5rem;
  font-family: cursive;
  font-weight: 900;
  border-radius: 1rem;
  border: none;
  margin-top: 1rem;
  color: #fff;
  background-color: #0c550c;
`;
