function TodoItem({ dispatch, id, title, completed }) {
  const handleCheck = () => {
    dispatch({
      type: "toggle_item_check",
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "delete_item",
      id: id,
    });
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={completed} onChange={handleCheck}></input>
      <p
        style={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "gray" : "black",
        }}
      >
        {title}
      </p>
      <button disabled={completed}>edit</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default TodoItem;
