import './ItemModal.css';
import closeIcon from '../../../assets/close-icon.png';

function ItemModal({activeModal, handleCloseModal, setSelectedCard}) {
    return (
        <div className={`modal${activeModal === "preview" ? " modal_opened" : ""}`}>
            <div className="modal__content modal__content_type_image">
                <button onClick={handleCloseModal} type="button" className="modal__close">
                    <img src={closeIcon} alt="Close" className="modal__close-icon" />
                </button>
                <img src={setSelectedCard.imageUrl} alt={""} className="modal__image" />
                <div className="modal__footer">
                    <h2 className="modal__caption">{ItemCard.name}</h2>
                    <p className="modal__weather">weather: {ItemCard.weather}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemModal;