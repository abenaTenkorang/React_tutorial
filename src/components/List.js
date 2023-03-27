import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Todolist = ({
  newTodos, completedTask, deleteTodo, clearAllCompleted,
  saved, updateTodos,
}) => (
  <div className="todo-list">
    {!newTodos.length ? <div className="empty-list">You have no tasks to do.</div>
      : newTodos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          completedTask={completedTask}
          deleteTodo={deleteTodo}
          saved={saved}
          updateTodos={updateTodos}
        />
      ))}
    { newTodos.length ? (
      <div className="complete-btn-container">
        <button type="button" className="clear-completed-btn" onClick={clearAllCompleted}>Clear completed</button>
      </div>
    ) : '' }
  </div>
);

// set propTypes validation for Todolist
Todolist.propTypes = {
  newTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  completedTask: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  clearAllCompleted: PropTypes.func.isRequired,
  saved: PropTypes.func.isRequired,
  updateTodos: PropTypes.func.isRequired,
};

export default Todolist;
