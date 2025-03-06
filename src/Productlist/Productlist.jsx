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
      prix: "30",
      description: "Sandwich à la viande marinée avec sauce maison, tomates et oignons",
      categorie: "Shawarma",
      image: "shawarma1.jpg",
    },
    {
      titre: "Shawarma poulet",
      prix: "35",
      description: "Sandwich garni de poulet grillé, légumes frais et sauce crémeuse à l'ail",
      categorie: "Shawarma",
      image: "shawarma2.jpg",
    },
    {
      titre: "Shawarma mixte",
      prix: "45",
      description: "Délicieux mélange de viande et poulet avec légumes croquants et sauce tahini",
      categorie: "Shawarma",
      image: "shawarma3.jpg",
    },
    {
      titre: "Tacos poulet",
      prix: "35",
      description: "Tacos au poulet avec frites et sauce fromagère",
      categorie: "Tacos",
      image: "tacos2.jpg",
    },
    {
      titre: "Tacos viande",
      prix: "40",
      description: "Tacos à la viande hachée avec frites et sauce algérienne",
      categorie: "Tacos",
      image: "tacos1.jpg",
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
      titre: "La cigogne",
      prix: "4",
      description: "Soda local rafraîchissant aux extraits naturels, 33cl",
      categorie: "Boisson",
      image: "boisson1.jpg",
    },
    {
      titre: "Lipton Ice Tea",
      prix: "5",
      description: "Thé glacé parfumé au citron, rafraîchissant et désaltérant, 33cl",
      categorie: "Boisson",
      image: "boisson2.jpg",
    },
    {
      titre: "Glass Cola",
      prix: "3",
      description: "Soda cola pétillant au goût caramélisé, servi bien frais, 25cl",
      categorie: "Boisson",
      image: "boisson3.png",
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
