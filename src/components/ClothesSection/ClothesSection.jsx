import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import defaultClothingItems from "../../utils/clothingItems.js";

function ClothesSection({ onCardClick }) {
  return (
    <div className="clothes__section">
      <div className="clothes__section-header">
        <h2 className="clothes__section-title">Your items</h2>
        <button className="clothes__section-btn" type="button">
          + Add new
        </button>
      </div>
      <ul className="clothes__section-items">
        {defaultClothingItems.map((item) => (
          <ItemCard
            key={item._id || item.name}
            item={item}
            onCardClick={onCardClick}
          />
        ))}
      </ul>
    </div>
  );
}
export default ClothesSection;
