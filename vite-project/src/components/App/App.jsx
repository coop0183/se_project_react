import './App.css'
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import { useState } from 'react';
import ModalWithForm from './ModalWithForm/ModalWithForm.jsx';
import Footer from './Footer/Footer.jsx';

function App() {
  const [weatherData, setWeatherData] = useState( {type: "hot"});
  const [activeModal, setActiveModal] = useState("");
  const handleAddClick = () => {
    setActiveModal(!activeModal);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick}/>
        <Main weatherData={weatherData}/>
      </div>
      <ModalWithForm buttonText="Add garment" title="New Garment" activeModal={activeModal} handleCloseModal={handleCloseModal}>
        <label htmlFor="name" className="modal__label">Name{""} <input type="text" className="modal__input" id="name" placeholder="Name" /></label>
            <label htmlFor="imageUrl" className="modal__label">Image{""} <input type="url" className="modal__input" id="imageUrl" placeholder="Image URL" /></label>
            <fieldset className="modal__radio-buttons">
                <legend className="modal__legend">Select the weather type:</legend>
                <label htmlFor="hot" className="modal__label modal__label_type_radio">
                    <input id="hot" type="radio" className="modal__radio-input" /> Hot
                </label>
                <label htmlFor="warm" className="modal__label modal__label_type_radio">
                    <input id="warm" type="radio" className="modal__radio-input" /> Warm
                </label>
                <label htmlFor="cold" className="modal__label modal__label_type_radio">
                    <input id="cold" type="radio" className="modal__radio-input" /> Cold
                </label>
            </fieldset>
      </ModalWithForm> 
      <Footer />
    </div>
  )
}

export default App
