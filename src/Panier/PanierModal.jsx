export default function PanierModal({ panier, onClose, onRemove }) {
  const total = panier.reduce((sum, item) => sum + Number(item.prix), 0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>Mon Panier</h2>
        {panier.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          <>
            <div className="panier-items">
              {panier.map((item, index) => (
                <div key={index} className="panier-item">
                  <img src={`pictures/${item.image}`} alt={item.titre} />
                  <div className="panier-item-info">
                    <h3>{item.titre}</h3>
                    <p>{item.prix} DH</p>
                  </div>
                  <button onClick={() => onRemove(index)}>×</button>
                </div>
              ))}
            </div>
            <div className="panier-total">
              <h3>Total: {total} DH</h3>
              <button className="commander-button">Valider la commande</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
