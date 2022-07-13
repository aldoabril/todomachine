import "./TodoItem.css";
export function TodoItem({ text, completed, index, onCompleteTodo, onDeleteTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked = {completed}
        onChange={(e) => onCompleteTodo(e.target.checked, index)}
      />
      {text}
      <span onClick={() => onDeleteTodo(index)}>X</span>
    </li>
  );
}
