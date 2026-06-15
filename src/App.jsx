//import { useState } from 'react'

import AddTask from "./Components/AddTask";
import AppName from "./Components/AppName";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/todoItem2";

function App() {
  return (
    <center class="todo-box">
      <AppName></AppName>
      <AddTask></AddTask>
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
    </center>
  );
}

export default App;
