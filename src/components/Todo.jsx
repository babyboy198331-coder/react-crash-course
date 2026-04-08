import './Todo.css';

function Todo({ Title }) {
    return (
        <div className="Todo">
        <h2>{Title}</h2>
        <button>Delete</button>
      </div>
    )
}

export default Todo;