import React from "react";
import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton/CreateTodoButton";
import { NewTodoModal } from "./Components/NewTodoModal/NewTodoModal";
import { useTodos } from "./Hooks/useTodos.js";
import { TodosError } from "./Components/TodosError";
import { TodosEmpty } from "./Components/TodosEmpty";
import { TodosLoading } from "./Components/TodosLoading";
import "./App.css";

export function App() {
  const {
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
    loading,
    error,
  } = useTodos();

  return (
    <>
      <header>
        <h1>Welcome to Todo Machine</h1>
        <TodoCounter
          completedTasks={completedTodos.length}
          totalTasks={todos.length}
        />
      </header>
      <main>
        <nav>
          <TodoSearch
            value={query}
            onChangeValue={(e) => setQuery(e.target.value)}
          />
        </nav>
        <section>
          <TodoList
            error={error}
            loading={loading}
            todos={filteredTodos}
            onError={(error) => <TodosError error={error} />}
            onLoading={() => <TodosLoading />}
            onEmptyTodos={() => <TodosEmpty />}
            render={(todo, index) => (
              <TodoItem
                key={index}
                text={todo.text}
                index={index}
                onCompleteTodo={(checked, index) =>
                  completeTodo(checked, index)
                }
                onDeleteTodo={(index) => deleteTodo(index)}
              />
            )}
          />
        </section>
      </main>
      <NewTodoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAddTodo={addTodo}
      />
      <footer>
        <CreateTodoButton onClick={() => setIsOpen(true)}></CreateTodoButton>
      </footer>
    </>
  );
}
