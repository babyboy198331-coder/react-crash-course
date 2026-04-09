import './Todo.css';

function Todo({ Title, paragraph }) {
   function deleteTodo(id) {
    console.log('deleteTodo()', Title.toUpperCase());
   }
  
  return (
        <div className="Todo">
        <h2>{Title}</h2>
        <p>{paragraph}</p>
        <button onClick={() => deleteTodo(1)}>Delete</button>
      </div>
    )
}

export default Todo;