function TodoItem2() {
    let task='Learn React JS';
    let Date='01/07/26';

  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">{task}</div>
        <div class="col-4">{Date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
