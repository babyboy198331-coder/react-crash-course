import './Modal.css';

function Modal({ title, cancelModal, confirmModal }) {
  return (
    <>
      {/* Backdrop (clicking it closes modal) */}
      <div className="backdrop" onClick={cancelModal}></div>

      {/* Modal */}
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
      >
        <p className="modal__title">{title}</p>

        <div className="modal__buttons">
          <button
            onClick={cancelModal}
            className="btn btn__cancel"
          >
            Cancel
          </button>

          <button
            onClick={confirmModal}
            className="btn"
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;