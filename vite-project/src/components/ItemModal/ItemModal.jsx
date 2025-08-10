import './ItemModal.css';
import closeIcon from '../../assets/close-icon.png';

function ItemModal({activeModal, handleCloseModal, card}) {
    return (
        <div className={`modal${activeModal === "preview" ? " modal_opened" : ""}`}>
            <div className="modal__content modal__content_type_image">
                <button onClick={handleCloseModal} type="button" className="modal__close">
                    <img src={closeIcon} alt="Close" className="modal__close-icon" />
                </button>
                <img src={card.link} alt={""} className="modal__image" />
                <div className="modal__footer">
                    <h2 className="modal__caption">{card.name}</h2>
                    <p className="modal__weather">weather: {card.weather}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemModal;