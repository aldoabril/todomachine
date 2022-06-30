import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./TodoItem.css";
export function TodoItem({ item, index, onCheckItem, onDelete }) {
  const { todos, setTodos } = useContext(TodoContext);

  const handleCheck = (e, index) => {
    let localTodos = [...todos];
    localTodos[index].completed = e.target.checked;
    setTodos([...localTodos]);
  };

  const handleDelete = (index) => {
    let localTodos = [...todos];
    localTodos.splice(index, 1);
    setTodos([...localTodos]);
  };
  return (
    <li>
      <input type="checkbox" onChange={(e) => handleCheck(e, index)} />
      {item.text}
      <span onClick={() => handleDelete(index)}>X</span>
    </li>
  );
}
