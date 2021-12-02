import React, { useState } from "react";
//css
import "./App.css";
//components
import AddTodo from "./components/AddTodo";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");


  return (
    <div className="App">
      <section className="todoapp">
        <AddTodo setTodos={setTodos} />
        {/* <!-- This section should be hidden by default and shown when there are todos --> */}
        {todos.length > 0 && (
          <List todos={todos} setTodos={setTodos} filter={filter} />
        )}

        {/* <!-- This footer should hidden by default and shown when there are todos --> */}
        {todos.length>0 && <Footer setFilter = {setFilter} todos = {todos} setTodos = {setTodos} />}  
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a> and <a href="https://github.com/EmptyBox12">Ataberk Tümay</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a> and <a href="https://www.patika.dev/programlar/alotech-fullstack-bootcamp">AloTech Bootcamp</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
