import "./ItemModal.css";
import closeIcon from "../../assets/close-icon.png";

function ItemModal({ isOpen, onClose, card, onCardDelete }) {
  return (
    <div className={isOpen ? "modal modal_opened" : "modal"}>
      <div className="modal__overlay"></div>

      <div className="modal__content">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <div className="modal__image">
          <h2 className="modal__caption">{card.name}</h2>
          <img
            src={card.imageUrl}
            alt={`Preview of ${card.name}`}
            className="modal__image-item"
          />
        </div>
        <div className="modal__info">
          <p className="modal__weather">weather: {card.weather}</p>
          <button
            className="modal__delete-btn"
            type="button"
            onClick={() => onCardDelete(card)}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
