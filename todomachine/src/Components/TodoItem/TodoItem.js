import "./TodoItem.css";
export function TodoItem({ text, index, onCompleteTodo, onDeleteTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={(e) => onCompleteTodo(e.target.checked, index)}
      />
      {text}
      <span onClick={() => onDeleteTodo(index)}>X</span>
    </li>
  );
}
