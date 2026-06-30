function TodoItem1({todoName, todoDate, onDeleteClk}) {
  return (
    <div className="container">
      <div className="row row1">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger btn1"
          onClick={()=> onDeleteClk(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
