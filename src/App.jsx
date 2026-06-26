//import { useState } from 'react'

import AddTask from "./Components/AddTask";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const initodoItems = [
  { name: "Learn React", dueDate: "2026-01-13" },
  { name: "Build Todo-App", dueDate: "2026-01-15" },
  { name: "Revise Git Commands", dueDate: "2026-01-18" },
  { name: "Practice DSA in C++", dueDate: "2026-01-20" },
  { name: "Integrate Bootstrap", dueDate: "2026-01-22" }
];

  const [todoItems, setTodoItems]=useState(initodoItems);
  const onNewItems = (itemName, itemDueDate)=>{
    console.log(`New Item Added : " ${itemName} Date : ${itemDueDate}`);
  }

  return (
    <center className="todo-box">
      <AppName></AppName>
      <AddTask onNewItems={onNewItems}></AddTask>
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
