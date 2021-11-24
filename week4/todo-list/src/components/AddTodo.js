import React, { useState } from "react";
import {nanoid} from "nanoid";

export default function AddTodo(props) {
  const [todo, setTodo] = useState({
    name: "",
    completed: false,
    id: 0,
    editMode: false,
  });

  function submitForm(e) {
    e.preventDefault();
    props.setTodos((todos) => {
      return todos.concat(todo);
    });
    setTodo({
      ...todo,
      name: "",
    });
  }
  function handleTodoInputChange(e) {
    setTodo({
      ...todo,
      name: e.target.value,
      id: nanoid()
    });
  }
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={submitForm}>
          <input
            className="new-todo"
            onChange={handleTodoInputChange}
            value = {todo.name}
            placeholder="What needs to be done?"
            autoFocus
          />
        </form>
      </header>
    </div>
  );
}
