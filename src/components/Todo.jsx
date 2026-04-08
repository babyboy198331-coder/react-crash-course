import './Todo.css';

function Todo(props) {
    return (
        <div className="Todo">
        <h2>{props.Title}</h2>
        <button>Delete</button>
      </div>
    )
}

export default Todo;