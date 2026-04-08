import './Todo.css';

function Todo({ Title, paragraph }) {
    return (
        <div className="Todo">
        <h2>{Title}</h2>
        <p>{paragraph}</p>
        <button>Delete</button>
      </div>
    )
}

export default Todo;