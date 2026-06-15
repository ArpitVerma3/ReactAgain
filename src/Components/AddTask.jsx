function AddTask(){
    return (
        <div class="container text-center">
        <div class="row row1">
          <div class="col-6">
            <input type="text" placeholder="Enter the tasks here"/>
          </div>
          <div class="col-4">
            <input type="date"/>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success btn1">Add</button>
          </div>
        </div>
        </div>
    )
}
export default AddTask;