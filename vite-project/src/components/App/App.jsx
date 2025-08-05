import './App.css'
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import { useState } from 'react';
import ModalWithForm from './ModalWithForm/ModalWithForm.jsx';

function App() {
  const [weatherData, setWeatherData] = useState( {type: "hot"});

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData}/>
      </div>
      <ModalWithForm />
    </div>
  )
}

export default App
