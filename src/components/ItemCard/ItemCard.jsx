import "./ItemCard.css";

function ItemCard({ item, onClick }) {
  const handleCardClick = () => {
    onClick(item);
  };

  return (
    <li className="card" onClick={handleCardClick}>
      <h2 className="card__title">{item.name}</h2>
      <img
        onClick={handleCardClick}
        src={item.link}
        alt={item.name}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;
