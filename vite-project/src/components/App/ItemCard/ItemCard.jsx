function ItemCard({ item }) {
    return (
        <div key={item._id || item.name}>
                        <h2>{item.name}</h2>
                        <img src={item.link} alt={item.name} className="cards__image" />
                    </div>
    )
}

export default ItemCard;