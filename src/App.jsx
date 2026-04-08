import './App.css';
import Todo from './components/Todo.jsx';
 import Title from './components/Title.jsx';
import Modal from './components/modal.jsx';


function App() {
  return (
    <div>
<Title></Title>
<div className="Todo__wrapper">
<Todo Title="Finsh Frontend simplified"
      paragraph="Code along with Frontend Simplified step by step" 
/>
<Todo Title="Finish Interview Section"
      paragraph="Finish every interview question in the next 6 wweks" 
/>
<Todo Title="Land a $100k Job" paragraph="Apply to 100 jobs"/>
</div>
 {/* <Modal title="Are you sure you want to delete?"/> */}
 <Modal title="Are you sure you want to Add?"/>
    </div>
 
  );
}

export default App;
