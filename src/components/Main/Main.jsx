import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";

function Main({ weatherData, onCardClick, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {Array.isArray(clothingItems) &&
            clothingItems
              .filter((item) => item.weather === weatherData.type)
              .map((item) => (
                <ItemCard
                  key={item._id || item.name}
                  item={item}
                  onCardClick={onCardClick}
                />
              ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
