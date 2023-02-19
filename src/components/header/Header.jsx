import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { authActions } from "../../store/auth/authSlice";

export const Header = ({ isAuthorized }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(authActions.logOut());
    navigate("/login");
  };
  return (
    <StyledHeader>
      <h1>REDUX TODO</h1>
      {isAuthorized ? (
        <StyledButton onClick={logOutHandler}>LOG OUT</StyledButton>
      ) : (
        <StyledButton onClick={logOutHandler}> SING IN</StyledButton>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #261d4c;
  color: #fff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledButton = styled.button`
  padding: 0.8rem 1rem;
  font-weight: 900;
  border: none;
  border-radius: 0.3rem;

  :hover {
    color: #fff;
    background-color: #074f06;
  }
`;
