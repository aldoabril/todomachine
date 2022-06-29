import React from "react";
import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton/CreateTodoButton";
import { NewTodoModal } from "./Components/NewTodoModal/NewTodoModal";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import "./App.css";

export const useFindTodos = (todos) => {
  const [query, setQuery] = React.useState("");
  const [filteredTodos, setFilteredTodos] = React.useState(todos);
  React.useMemo(() => {
    let result = todos;
    if (query) {
      result = todos.filter((item) =>
        item.text.toLowerCase().includes(query.toLowerCase())
      );
    }
    setFilteredTodos(result);
  }, [query, todos]);

  return [query, setQuery, filteredTodos];
};
export function App() {
  const [todos, setTodos] = useLocalStorage("TODOS_V1");
  const [query, setQuery, filteredTodos] = useFindTodos(todos);
  const handleChangeValue = (e) => {
    setQuery(e.target.value);
    //console.log(e.target.value);
  };
  const [item, setItem] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
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
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAddItem = () => {
    setTodos([...todos, { text: item, completed: false }]);
  };
  const completedTask = todos.filter((item) => item.completed);

  return (
    <>
      <header>
        <h1>Welcome to Todo Machine</h1>
        <TodoCounter
          completedTasks={completedTask.length}
          totalTasks={todos.length}
        />
      </header>
      <main>
        <nav>
          <TodoSearch value={query} onChangeValue={handleChangeValue} />
        </nav>
        <section>
          <TodoList>
            {filteredTodos.map((item, index) => (
              <TodoItem
                item={item}
                index={index}
                onCheckItem={handleCheck}
                onDelete={handleDelete}
              />
            ))}
          </TodoList>
        </section>
      </main>
      <NewTodoModal
        isOpen={isOpen}
        onClose={handleClose}
        value={item}
        onChangeItem={(e) => setItem(e.target.value)}
        onAddItem={handleAddItem}
      />
      <footer>
        <CreateTodoButton onClick={handleClick}></CreateTodoButton>
      </footer>
    </>
  );
}
