import { useState } from "react";
import Product from "./Product";
import "../FoodCraft.css";
import AddForm from "../AddForm/AddForm";
import Search from "../Search/Search";
import PanierModal from "../Panier/PanierModal";

export default function Productlist() {
  const [listproduits, Setlistproduits] = useState([
    {
      titre: "Shawarma classic",
      prix: "20",
      description: "Shawarma classic",
      categorie: "Shawarma",
      image: "shawarma1.jpg",
    },
    {
      titre: "Shawarma poulet",
      prix: "25",
      description: "Shawarma au poulet mariné",
      categorie: "Shawarma",
      image: "shawarma2.jpg",
    },
    {
      titre: "Shawarma mixte",
      prix: "30",
      description: "Shawarma mixte viande et poulet",
      categorie: "Shawarma",
      image: "shawarma3.jpg",
    },
    {
      titre: "Tacos poulet",
      prix: "35",
      description: "Tacos au poulet avec frites et sauce fromagère",
      categorie: "Tacos",
      image: "tacos1.jpg",
    },
    {
      titre: "Tacos viande",
      prix: "40",
      description: "Tacos à la viande hachée avec frites et sauce algérienne",
      categorie: "Tacos",
      image: "tacos2.jpg",
    },
    {
      titre: "Tacos mixte",
      prix: "45",
      description: "Tacos mixte poulet et viande avec frites et sauce au choix",
      categorie: "Tacos",
      image: "tacos3.jpg",
    },
    {
      titre: "Hamburger classique",
      prix: "30",
      description: "Hamburger avec bœuf, salade, tomate et sauce maison",
      categorie: "Hamburger",
      image: "hamburger3.jpg",
    },
    {
      titre: "Cheeseburger",
      prix: "35",
      description:
        "Hamburger avec bœuf, fromage cheddar, salade, tomate et sauce spéciale",
      categorie: "Hamburger",
      image: "hamburger1.jpg",
    },
    {
      titre: "Double burger",
      prix: "45",
      description:
        "Hamburger double viande avec fromage, bacon, oignons et sauce barbecue",
      categorie: "Hamburger",
      image: "hamburger2.jpg",
    },
    {
      titre: "Coca Cola",
      prix: "10",
      description: "Boisson gazeuse rafraîchissante, 33cl",
      categorie: "Boisson",
      image: "boisson1.jpg",
    },
    {
      titre: "Jus d'Orange",
      prix: "12",
      description: "Jus d'orange pressé frais, 25cl",
      categorie: "Boisson",
      image: "boisson2.jpg",
    },
    {
      titre: "Eau Minérale",
      prix: "5",
      description: "Eau minérale naturelle, 50cl",
      categorie: "Boisson",
      image: "boisson3.jpg",
    },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [panier, setPanier] = useState([]);
  const [showPanier, setShowPanier] = useState(false);

  const AjoutProd = (Nouvprod) => {
    Setlistproduits([...listproduits, Nouvprod]);
  };

  const toggleForm = () => {
    setShowAddForm(!showAddForm);
  };

  const handleSearch = (results) => {
    setFilteredProducts(results);
  };

  const ajouterAuPanier = (produit) => {
    setPanier([...panier, produit]);
  };

  return (
    <div className="productlist-container">
        <div className="header-container">
            <h1 className="website-title">FoodCraft</h1>
            <div className="search-wrapper">
                <Search prods={listproduits} onSearch={handleSearch} />
            </div>
            <button className="panier-button" onClick={() => setShowPanier(true)}>
                🛒
                <span className="panier-count">{panier.length}</span>
            </button>
            <button className="add-button" onClick={toggleForm}>
                {showAddForm ? "×" : "+"}
            </button>
        </div>
        {showAddForm && <AddForm produits={AjoutProd} />}
        {showPanier && (
            <PanierModal
            panier={panier}
            onClose={() => setShowPanier(false)}
            onRemove={(index) => {
                const newPanier = panier.filter((_, i) => i !== index); // remove item at index
                setPanier(newPanier);
            }}
            />
        )}
        <h1 className="productlist-title">Notre Menu</h1>
        <div className="products-grid">
            <Product
                list={filteredProducts.length > 0 ? filteredProducts : listproduits}
                onCommander={ajouterAuPanier}
            />
        </div>
    </div>
  );
}
