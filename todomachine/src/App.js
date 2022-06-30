import React, { createContext } from "react";
import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton/CreateTodoButton";
import { NewTodoModal } from "./Components/NewTodoModal/NewTodoModal";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import { TodoContext } from "./Context/TodoContext";
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

  const value = React.useMemo(
    () => ({
      todos,
      setTodos,
    }),
    [todos]
  );

  const [query, setQuery, filteredTodos] = useFindTodos(todos);
  const handleChangeValue = (e) => {
    setQuery(e.target.value);
    //console.log(e.target.value);
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const completedTask = todos.filter((item) => item.completed);

  return (
    <TodoContext.Provider value={value}>
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
                <TodoItem item={item} index={index} />
              ))}
            </TodoList>
          </section>
        </main>
        <NewTodoModal isOpen={isOpen} onClose={handleClose} />
        <footer>
          <CreateTodoButton onClick={handleClick}></CreateTodoButton>
        </footer>
      </>
    </TodoContext.Provider>
  );
}
