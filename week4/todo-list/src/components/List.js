import React, { useState, useEffect } from "react";

export default function List({ todos, setTodos, filter }) {
  function onEditBlur(e) {
    let index = todos.findIndex(
      (element) => element.id === e.target.getAttribute("data-id")
    );
    let todosArray = [...todos];
    todosArray[index].editMode = false;
    setTodos(todosArray);
  }
  function editModeOnClick(e) {
    let index = todos.findIndex(
      (element) => element.id === e.target.getAttribute("data-id")
    );
    let todosArray = [...todos];
    todosArray[index].editMode = true;
    setTodos(todosArray);
  }
  function editTodo(e) {
    let index = todos.findIndex(
      (element) => element.id === e.target.getAttribute("data-id")
    );
    let todosArray = [...todos];
    todosArray[index].name = e.target.value;
    setTodos(todosArray);
  }
  function toggleCompleted(e) {
    let index = todos.findIndex(
      (element) => element.id === e.target.getAttribute("data-id")
    );
    let todosArray = [...todos];
    todosArray[index].completed = !todos[index].completed;
    setTodos(todosArray);
  }
  function deleteTodo(e) {
    let deleteIndex = todos.findIndex(
      (element) => element.id === e.target.getAttribute("data-id")
    );
    let newArray = todos.filter((item, index) => {
      return index !== parseInt(deleteIndex);
    });
    setTodos(newArray);
  }

  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todos
            .filter((todo) => {
              if (filter === "all") {
                return todo;
              } else if (filter === "completed") {
                return todo.completed === true;
              } else if (filter === "active") {
                return todo.completed === false;
              } else {
                return todo;
              }
            })
            .map((todo) => {
              return (
                <li className={todo.completed ? "completed" : ""} key={todo.id}>
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={todo.completed ? true : false}
                      data-id={todo.id}
                      onClick={toggleCompleted}
                    />
                    {todo.editMode ? (
                      <input
                        id = "editMode"
                        type="text"
                        name="todo"
                        value={todo.name}
                        onChange={editTodo}
                        data-id={todo.id}
                        onBlur={onEditBlur}
                      />
                    ) : (
                      <label
                        htmlFor="todo"
                        onClick={editModeOnClick}
                        data-id={todo.id}
                      >
                        {todo.name}
                      </label>
                    )}
                    <button
                      className="destroy"
                      data-id={todo.id}
                      onClick={deleteTodo}
                    ></button>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
}
