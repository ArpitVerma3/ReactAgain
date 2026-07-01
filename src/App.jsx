import AddTask from "./Components/AddTask";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import WlcmMsg from "./Components/wlcmMsg";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const onNewItems = (itemName, itemDueDate) => {
    const newItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newItems);
  };

  const DeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-box">
      <AppName></AppName>
      {todoItems.length === 0 && <WlcmMsg />}
      <AddTask onNewItems={onNewItems}></AddTask>
      <TodoItems todoItems={todoItems} onDeleteClk={DeleteItem} />
    </center>
  );
}

export default App;
