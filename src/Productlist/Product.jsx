export default function Product({ list, onCommander }) {
  return (
    <>
      {list.map((prod, index) => (
        <div key={index} className="product-card">
          <div className="product-image">
            <img src={`pictures/${prod.image}`} alt={prod.titre} />
          </div>
          <div className="product-info">
            <h2 className="product-title">{prod.titre}</h2>
            <span className="product-category">{prod.categorie}</span>
            <p className="product-description">{prod.description}</p>
            <div className="product-price">{prod.prix} DH</div>
            <button className="order-button" onClick={() => onCommander(prod)}>
              Commander
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
