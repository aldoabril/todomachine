import React from "react";
import "./TodoItem.css";
export function TodoItem({ item }) {
  return (
    <li>
      <input type="checkbox" />
      {item.text}
    </li>
  );
}
