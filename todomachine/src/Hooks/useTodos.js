import { useState, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useFindTodos = (todos) => {
  const [query, setQuery] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  useMemo(() => {
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

export function useTodos() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1");
  const [query, setQuery, filteredTodos] = useFindTodos(todos);
  const [isOpen, setIsOpen] = useState(false);

  const completedTodos = todos.filter((item) => item.completed);

  const completeTodo = (e, index) => {
    let localTodos = [...todos];
    localTodos[index].completed = e.target.checked;
    saveTodos([...localTodos]);
  };

  const deleteTodo = (index) => {
    let localTodos = [...todos];
    localTodos.splice(index, 1);
    saveTodos([...localTodos]);
  };

  const addTodo = (item) => {
    saveTodos([...todos, { text: item, completed: false }]);
  };

  return {
    todos,
    saveTodos,
    query,
    setQuery,
    filteredTodos,
    completedTodos,
    completeTodo,
    deleteTodo,
    addTodo,
    isOpen,
    setIsOpen,
  };
}
