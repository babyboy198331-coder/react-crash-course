import './Todo.css';

function Todo({ title, onTodoDelete }) {
  return (
    <div className="Todo">
      <p>{title}</p>

      <button onClick={onTodoDelete}>
        Delete
      </button>
    </div>
  );
}

export default Todo;