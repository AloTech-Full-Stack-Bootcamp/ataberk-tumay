import React, { useState } from "react";

export default function Footer({ setFilter, todos, setTodos }) {
  const [selected, setSelected] = useState("all");
  function clearCompleted(e) {
    let newArray = todos.filter((item) => item.completed === false);
    setTodos(newArray);
  }
  return (
    <>
      <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count">
          <strong>{todos.filter(item => item.completed === false).length} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <button
              className={selected === "all" ? "selected" : ""}
              onClick={(e) => {
                setFilter("all");
                setSelected("all");
              }}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={selected === "active" ? "selected" : ""}
              onClick={(e) => {
                setFilter("active");
                setSelected("active");
              }}
            >
              Active
            </button>
          </li>
          <li>
            <button
              className={selected === "completed" ? "selected" : ""}
              onClick={(e) => {
                setFilter("completed");
                setSelected("completed");
              }}
            >
              Completed
            </button>
          </li>
        </ul>

        {/* <!-- Hidden if no completed items are left ↓ --> */}
        {todos.every((item) => item.completed === false) || (
          <button onClick={clearCompleted} className="clear-completed">
            Clear completed
          </button>
        )}
      </footer>
    </>
  );
}
