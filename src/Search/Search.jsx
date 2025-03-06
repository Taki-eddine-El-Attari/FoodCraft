import { useState, useEffect } from "react";

export default function Search({ prods, onSearch }) {
  const [searchinput, setSearchinput] = useState("");

  useEffect(() => {
    const searchTerm = searchinput.toLowerCase();
    const products = prods.filter(
      (product) =>
        product.titre.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.categorie.toLowerCase().includes(searchTerm) ||
        product.prix.toString().includes(searchTerm)
    );
    onSearch(products);
  }, [searchinput, prods, onSearch]);

  return (
    <div className="search-container">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Rechercher un produit..."
        value={searchinput}
        onChange={(e) => setSearchinput(e.target.value)}
      />
    </div>
  );
}
