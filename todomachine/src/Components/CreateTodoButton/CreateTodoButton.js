import React from "react";
import "./CreateTodoButton.css";
export function CreateTodoButton({ onClick }) {
  return (
    <div className="CreateTodoButton">
      <button className="addTodo" onClick={onClick}>
        +
      </button>
    </div>
  );
}
