import './App.css';
import Todo from './components/Todo.jsx';
 import Title from './components/Title.jsx';


function App() {
  return (
    <div>
<Title></Title>
<div className="Todo__wrapper">
<Todo title="Finsh Frontend simplified"/>
<Todo title="Finish Interview Section"/>
<Todo title="Land a $100k Job"/>
</div>
 {/* <Modal /> */}
    </div>
 
  );
}

export default App;
