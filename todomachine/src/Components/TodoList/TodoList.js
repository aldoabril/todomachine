import React from "react";

import "./TodoList.css";
export function TodoList({
  error,
  loading,
  todos,
  onError,
  onLoading,
  onEmptyTodos,
  render,
}) {
  if (loading) return onLoading();
  if (error) return onError();
  if (!loading || todos.length === 0) return onEmptyTodos();
  return todos.map((item, index) => render(item, index));
}
