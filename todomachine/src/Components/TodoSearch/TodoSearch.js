import React from "react";
import "./TodoSearch.css";
export function TodoSearch({ value, onChangeValue }) {
  return (
    <div>
      <input
        className="buscar"
        type="text"
        placeholder="Todo Buscar"
        value={value}
        onChange={onChangeValue}
      />
    </div>
  );
}
