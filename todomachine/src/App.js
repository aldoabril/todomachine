import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton/CreateTodoButton";
import "./App.css";
const todos = [
  { text: "Cortar Cebolla", completed: false },
  { text: "Picar papas", completed: false },
  { text: "Pelar papas", completed: false },
];
export function App() {
  const todosList = [];
  return (
    <>
      <header>
        <h1>Welcome to Todo Machine</h1>
        <TodoCounter />
      </header>
      <main>
        <nav>
          <TodoSearch />
        </nav>
        <section>
          <TodoList>
            {todos.map((item) => (
              <TodoItem item={item} />
            ))}
          </TodoList>
        </section>
      </main>

      <footer>
        <CreateTodoButton></CreateTodoButton>
      </footer>
    </>
  );
}
