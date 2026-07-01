import { useState } from "react";
import { MdAddTask } from "react-icons/md";

function AddTask({ onNewItems }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

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
    <div className="container text-center">
      <div className="row row1">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter the tasks here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success btn1"
            onClick={AddBtnClk}
          >
            <MdAddTask/>
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTask;
