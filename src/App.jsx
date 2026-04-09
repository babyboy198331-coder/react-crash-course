import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
import Counter from './components/Counter.jsx';
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Title />

      <Counter />

      <div>
        <input
          type="text"
          onChange={(event) => {
            // handle input here
          }}
        />
        <button onClick={() => setShowModal(true)}>
          Add Todo
        </button>
      </div>

      <div className="Todo__wrapper">
        <Todo title="Finish Frontend Simplified" />
        <Todo title="Finish Interview Section" />
        <Todo title="Land a $100k Job" />
      </div>

      {showModal && <Modal title="Confirm Delete?" />}
    </div>
  );
}

export default App;