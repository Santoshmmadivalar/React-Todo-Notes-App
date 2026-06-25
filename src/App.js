import React from "react";
import Todo from "./components/Todo";
import Notes from "./components/Notes";
import "./App.css";

function App() {

  return (
    <div className="app">

      <h1>📝 Task Manager & Notes App</h1>

      <div className="container">

        <Todo />

        <Notes />

      </div>

    </div>
  );
}

export default App;