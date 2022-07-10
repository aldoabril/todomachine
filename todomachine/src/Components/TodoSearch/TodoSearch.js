import React from "react";
import "./TodoSearch.css";
export function TodoSearch({ value, onChangeValue, loading }) {
  return (
    <div>
      <input
        className="buscar"
        type="text"
        placeholder="Todo Buscar"
        value={value}
        onChange={onChangeValue}
        disabled={loading}
      />
    </div>
  );
}
