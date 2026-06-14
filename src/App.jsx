//import { useState } from 'react'

function App() {
  return (
    <center class="todo-box">
      <h1>Todo App</h1>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter the tasks here"/>
          </div>
          <div class="col-4">
            <input type="date"/>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">Add</button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter the tasks here"/>
          </div>
          <div class="col-4">
            <input type="date"/>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">Add</button>
          </div>
          <button type="button" class="btn btn-danger">Delete</button>
          </div>

      </div>
    </center>
  );
}

export default App;
