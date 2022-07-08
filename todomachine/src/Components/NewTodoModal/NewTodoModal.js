import { useState } from "react";
import ReactDOM from "react-dom";
import "./NewTodoModal.css";

export function NewTodoModal({ isOpen, onClose, onAddTodo }) {
  const [item, setItem] = useState("");

  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <input type="button" className="close" value="X" onClick={onClose} />
      <div className="modal-content">
        <input
          type="text"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <input

          type="button"
          onClick={() => onAddTodo(item)}
          className="close"
          value="Add Item"
        />
      </div>
    </div>,
    document.getElementById("modal")
  );
}
