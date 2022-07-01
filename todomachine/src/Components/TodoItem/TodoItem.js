import "./TodoItem.css";
export function TodoItem({ item, index, onCompleteTodo, onDeleteTodo }) {
  return (
    <li key={index}>
      <input type="checkbox" onChange={(e) => onCompleteTodo(e, index)} />
      {item.text}
      <span onClick={() => onDeleteTodo(index)}>X</span>
    </li>
  );
}
