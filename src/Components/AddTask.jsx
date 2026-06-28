import { useState } from "react";

function AddTask({ onNewItems }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const AddBtnClk = () => {
    onNewItems(todoName, dueDate);
  };
  return (
    <div class="container text-center">
      <div class="row row1">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter the tasks here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div class="col-4">
          <input type="date"value={dueDate} onChange={handleDateChange} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success btn1"
            onClick={AddBtnClk}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTask;
