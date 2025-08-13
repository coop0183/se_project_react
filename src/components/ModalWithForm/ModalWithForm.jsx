import "./ModalWithForm.css";
import closeIcon from "../../assets/close-icon.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseModal,
}) {
  return (
    <div
      className={activeModal === "add garment" ? "modal modal-opened" : "modal"}
    >
      <div className="modal__overlay" onClick={handleCloseModal}></div>

      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseModal}
          type="button"
          className="modal__close"
        >
          <img src={closeIcon} alt="Close" className="modal__close-icon" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
