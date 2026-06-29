import AddTask from "./Components/AddTask";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import WlcmMsg from "./Components/wlcmMsg";

function App() {

  const [todoItems, setTodoItems]=useState([]);
  const onNewItems = (itemName, itemDueDate)=>{
    console.log(`New Item Added : " ${itemName} Date : ${itemDueDate}`);
    const newItems=[...todoItems, {name:itemName, dueDate:itemDueDate}];
    setTodoItems(newItems);
  }

  return (
    <center className="todo-box">
      <AppName></AppName>
      {todoItems.length === 0 && <WlcmMsg />}
      <AddTask onNewItems={onNewItems}></AddTask>
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
