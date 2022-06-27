import React from "react";
import "./TodoList.css";
export function TodoList(props) {
  return <ul>{props.children}</ul>;
}
