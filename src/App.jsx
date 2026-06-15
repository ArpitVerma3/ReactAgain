//import { useState } from 'react'

import AddTask from "./Components/AddTask";
import AppName from "./Components/AppName";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/todoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-box">
      <AppName></AppName>
      <AddTask></AddTask>
      
      <div className="item-box">
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
