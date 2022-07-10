import React from "react";

import "./TodoList.css";
export function TodoList({
  error,
  loading,
  totalTodos,
  todos,
  onError,
  onLoading,
  onEmptyTodos,
  render,
}) {
  console.log("dentro de list", todos.length);
  if (loading) return onLoading();
  if (error) return onError();
  else if (!loading && totalTodos === 0) return onEmptyTodos();

  return <ul>{todos.map((item, index) => render(item, index))}</ul>;
}
