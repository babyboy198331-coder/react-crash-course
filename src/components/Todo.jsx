import './Todo.css';

function Todo({ Title, onTodoDelete }) {
   function deleteTodo(id) {
    console.log('deleteTodo()', Title.toUpperCase());
   }
  
  return (
        <div className="Todo">
        <p>{Title}</p>
        <button onClick={onTodoDelete}>Delete</button>
      </div>
    )
}

export default Todo;