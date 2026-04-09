import './App.css';
import Todo from './components/Todo.jsx';
 import Title from './components/Title.jsx';
import Modal from './components/modal.jsx';


function App() {
  return (
   <div>
<Title />
<div>
  <input type="text"/>
  <button>Add Todo</button>
</div>
<div className="Todo__wrapper">
<Todo Title="Finsh Frontend simplified"/>
<Todo Title="Finish Interview Section"/>
<Todo Title="Land a $100k Job"/>
</div>
 {/* <Modal title="Are you sure you want to delete?"/> */}
 
    </div>
 
  );
}

export default App;
