import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "./Todo";

export const TodoList = ({ setEditVisibility, setInputState, setTodoId }) => {
  const title = useSelector((state) => state.todos);
  return (
    <div>
      {title.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          setEditVisibility={setEditVisibility}
          setInputState={setInputState}
          setTodoId={setTodoId}
        />
      ))}
    </div>
  );
};
