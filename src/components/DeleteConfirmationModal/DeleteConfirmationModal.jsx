import "./DeleteConfirmationModal.css";
import closeIcon from "../../assets/close-icon.png";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm, cardToDelete }) {
  if (!isOpen) return null;

  return (
    <div className="modal modal_opened">
      <div className="modal__overlay"></div>
      <div className="modal__content modal__content_type_confirmation">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <p className="modal__text">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <button
          className="modal__confirm-btn"
          type="button"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>
        <button className="modal__cancel-btn" type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
