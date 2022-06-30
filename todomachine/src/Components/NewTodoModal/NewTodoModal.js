import { useState, useContext } from "react";
import ReactDOM from "react-dom";
import "./NewTodoModal.css";
import { TodoContext } from "../../Context/TodoContext";
export function NewTodoModal(props) {
  const { todos, setTodos } = useContext(TodoContext);
  const [item, setItem] = useState("");
  const handleAddItem = () => {
    setTodos([...todos, { text: item, completed: false }]);
  };
  // value={item}
  //       onChangeItem={(e) => setItem(e.target.value)}
  //       onAddItem={handleAddItem}

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
        <input
          type="text"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <input
          type="button"
          onClick={handleAddItem}
          className="mybutton"
          value="Add Item"
        />
      </div>
    </div>,
    document.getElementById("modal")
  );
}
