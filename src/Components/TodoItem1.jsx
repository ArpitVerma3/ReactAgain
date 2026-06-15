function TodoItem1() {
    let task='Buy Milk';
    let Date='12/12/26';

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
export default TodoItem1;
