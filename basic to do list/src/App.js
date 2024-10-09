import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAddToDo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="to-do-container">
        <h2>To Do List</h2>

        <ul>
          {todos.map(({ text, completed }, index) => {
            // eslint-disable-next-line no-undef
            return (
              <div className="item">
                <li
                  key={index}
                  className={completed ? "done" : ""}
                  onClick={() => handleItemDone(index)}
                >
                  {text}
                </li>
                <span
                  className="delete"
                  ke2={index}
                  onClick={() => handleDeleteItem(index)}
                >
                  ❌
                </span>
              </div>
            );
          })}
        </ul>
        <input ref={inputRef} placeholder="Tape your task .." />
        <button className="btn" onClick={handleAddToDo}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
