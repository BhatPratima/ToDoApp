
import React, { useState } from 'react';
import './App.css';

function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== -1) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputValue;
        setTodos(updatedTodos);
        setEditIndex(-1);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-app">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>{editIndex !== -1 ? 'Edit' : 'Add'}</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <div>
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;

