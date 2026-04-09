import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';
import Counter from './components/Counter.jsx';
import React, { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function confirmModal() {
    console.log('Todo confirmed/deleted');
    setShowModal(false);
  }

  return (
    <div>
      <Title />
      <Counter />

      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />

        <button onClick={() => setShowModal(true)}>
          Add Todo
        </button>
      </div>

      <div className="Todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job" />
      </div>

      {showModal && (
        <Modal
          title="Confirm Delete?"
          cancelModal={closeModal}
          confirmModal={confirmModal}
        />
      )}
    </div>
  );
}

export default App;