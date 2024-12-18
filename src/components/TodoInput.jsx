import { useState } from "react";

function TodoInput({ dispatch, type, todoItem }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addNewTodoItem = () => {
    if (input.trim() === "") return; // don't add if empty
    dispatch({ type: type, todoItem: { title: input, completed: false } });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange}></input>
      <button onClick={addNewTodoItem}>add</button>
    </div>
  );
}
export default TodoInput;
