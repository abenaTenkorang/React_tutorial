import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todolist from '../components/List';

const TodoPage = () => {
// set initial state
  const [todo, setTodo] = useState({});

  // get saved todos form the localStorage
  const saved = () => JSON.parse(localStorage.getItem('todos')) || [];

  // set a state for the todos
  const [newTodos, setNewTodos] = useState(saved);

  // save todos to the localStorage
  const updateTodos = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // update todos to storage whenever the app state changes
  updateTodos(newTodos);

  const handleChange = (e) => {
    setTodo({
      id: uuidv4(),
      task: e.target.value,
      completed: false,
    });
  };
  // add new todo to the list
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodos([...newTodos, todo]);
    setTodo({ ...todo, task: '' });
  };

  // set a todo to completed
  const completedTask = (todoId) => {
    setNewTodos(newTodos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  // delete all completed todo from the list
  const clearAllCompleted = () => {
    setNewTodos(newTodos.filter((todo) => todo.completed === false));
  };

  // delete a todo from the list
  const deleteTodo = (todoId) => {
    setNewTodos(newTodos.filter((todo) => todo.id !== todoId));
  };
  return (
    <section>
      <h1 className="title">Todo List</h1>
      <div className="todo-content">
        <form onSubmit={handleSubmit}>
          <input className="input-form" type="text" value={todo.task} onChange={handleChange} placeholder="What is your todo list" required />
          <button className="form-submit" type="submit">ADD</button>
        </form>
        {' '}
        <Todolist
          newTodos={newTodos}
          completedTask={completedTask}
          deleteTodo={deleteTodo}
          clearAllCompleted={clearAllCompleted}
          saved={saved}
          updateTodos={updateTodos}
        />
      </div>
    </section>
  );
};

export default TodoPage;
