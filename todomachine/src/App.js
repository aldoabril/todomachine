import React from "react";
import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton/CreateTodoButton";
import { NewTodoModal } from "./Components/NewTodoModal/NewTodoModal";
import { useTodos } from "./Hooks/useTodos.js";
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
    error
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
          todos={todos}
          onError={()=><TodosError/>}
          onLoading={() =><TodosLoading/>}
          onEmptyTodos={() =><TodosEmpty/>}
          render={(todo)=><TodoItem }

          >
            {filteredTodos.map((item, index) => (
              <TodoItem
                key={index}
                item={item}
                index={index}
                onCompleteTodo={completeTodo}
                onDeleteTodo={deleteTodo}
              />
            ))}
          </TodoList>
        </section>
      </main>
      <NewTodoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAddTodo={addTodo}
      />
      <footer>
        <CreateTodoButton onClick={saveTodos}></CreateTodoButton>
      </footer>
    </>
  );
}
