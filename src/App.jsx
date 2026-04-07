import './App.css';
import Todo from './components/Todo.jsx';
 import Title from './components/Title.jsx';
 import Modal from './components/modal.jsx';

function App() {
  return (
    <div>
<Title></Title>
<div className="Todo__wrapper">
<Todo />
<Todo />
<Todo />
</div>
<Modal />
    </div>
 
  );
}

export default App;
