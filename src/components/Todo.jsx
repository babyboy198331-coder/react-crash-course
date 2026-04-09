import './Todo.css';

function Todo({ Title }) {
   function deleteTodo(id) {
    console.log('deleteTodo()', Title.toUpperCase());
   }
  
  return (
        <div className="Todo">
        <p>{Title}</p>
        <button onClick={() => deleteTodo(1)}>Delete</button>
      </div>
    )
}

export default Todo;