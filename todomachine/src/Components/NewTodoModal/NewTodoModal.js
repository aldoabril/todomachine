import React from "react";
import ReactDOM from "react-dom";
import "./NewTodoModal.css";

export function NewTodoModal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <input
        type="button"
        className="close"
        value="X"
        onClick={props.onClose}
      />
      <div className="modal-content">
        <input type="text" onChange={props.onChangeItem} value={props.value} />
        <input
          type="button"
          onClick={props.onAddItem}
          className="mybutton"
          value="Add Item"
        />
      </div>
    </div>,
    document.getElementById("modal")
  );
}
