import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    todo: "React",
    completed: false,
  },
  {
    id: 2,
    todo: "Redux Toolkit",
    completed: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo(state, action) {
      state.push(action.payload);
    },
    deleteToDo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    deleteAllToDo(state) {
      return (state = []);
    },

    editToDo(state, action) {
      state.forEach((todo) =>
        todo.id === action.payload.id ? (todo.todo = action.payload.text) : todo
      );
    },
    toggleToDo(state, action) {
      state.forEach((todo) =>
        todo.id === action.payload.id
          ? (todo.completed = action.payload.completed)
          : todo
      );
    },
  },
});

export const todoActions = todoSlice.actions;
