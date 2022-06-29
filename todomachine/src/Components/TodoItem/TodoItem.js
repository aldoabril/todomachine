import React from "react";
import "./TodoItem.css";
export function TodoItem({ item, index, onCheckItem, onDelete }) {
  return (
    <li>
      <input type="checkbox" onChange={(e) => onCheckItem(e, index)} />
      {item.text}
      <span onClick={() => onDelete(index)}>X</span>
    </li>
  );
}
