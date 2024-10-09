import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {
  // declaration de state
  const [value, setValue] = useState("");

  // stockage des donner pour les manipuler later
  const handleSubmit = e => {
    e.preventDefault(); //prevent the reload of the submission
    addTodo(value); // Call the addTodo function passed from TodoWrapper with the current input value
    setValue("")
    
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is your task for today ?"
        value={value}
        className="todo-input"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        
      />

      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
