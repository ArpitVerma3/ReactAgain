import TodoItem1 from "./TodoItem1";

function TodoItems({ todoItems }) {
  return (
    <div className="item-box">
      {todoItems.map((item, index) => (
        <TodoItem1 
          key={index}
          todoName={item.name} 
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
}

export default TodoItems;
