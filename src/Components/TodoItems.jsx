import TodoItem1 from "./TodoItem1";

function TodoItems({ todoItems, onDeleteClk }) {
  return (
    <div className="item-box">
      {todoItems.map((item, index) => (
        <TodoItem1 
          key={index}
          todoName={item.name} 
          todoDate={item.dueDate}
          onDeleteClk={onDeleteClk}
        />
      ))}
    </div>
  );
}

export default TodoItems;
