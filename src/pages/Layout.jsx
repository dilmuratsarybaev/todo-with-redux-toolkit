import React from "react";
import { useState } from "react";
import { TodoForm } from "../components/TodoForm";
import {TodoList} from "../components/TodoList"
export const Layout = () => {
  const [editVisibility, setEditVisibility] = useState(false);
  const [inputState, setInputState] = useState("");
  const [todoId, setTodoId] = useState("");
  return (
    <div>
      <TodoForm
        editVisibility={editVisibility}
        setEditVisibility={setEditVisibility}
        inputState={inputState}
        setInputState={setInputState}
        todoId={todoId}
      />
      <TodoList
        setEditVisibility={setEditVisibility}
        setInputState={setInputState}
        setTodoId={setTodoId}
      />
    </div>
  );
};
