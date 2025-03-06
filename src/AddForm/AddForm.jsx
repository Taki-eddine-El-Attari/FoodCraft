import React, { useState } from "react";

export default function AddForm({ produits }) {

    // État pour gérer les champs du formulaire
    const [titre, setTitre] = useState("");
    const [prix, setPrix] = useState("");
    const [description, setDescription] = useState("");
    const [categorie, setCategorie] = useState("");
    const [image, setImage] = useState("");
    // Gestion de la soumission du formulaire

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titre || !prix || !description || !categorie || !image) {
            alert("Veuillez remplir tous les champs !");
            return;
        }
        produits({ titre, prix: parseFloat(prix), description, categorie, image });
        setTitre("");
        setPrix("");
        setDescription("");
        setCategorie("");
        setImage("");
    };

    // Liste prédéfinie de catégories
    const categories = ["Shawarma", "Tacos", "Hamburger", "Boisson"];

    return <form onSubmit={handleSubmit}>
        <h2>Ajouter un Produit</h2>
        <div>
            <label>Titre :</label>
            <input
                type="text"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
            />
        </div>
        <div>
            <label>Prix :</label>
            <input
                type="number"
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
            />
        </div>
        <div>
            <label>Description :</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div>
            <label>Categorie :</label>
            <select 
                value={categorie}
                onChange={(e) => setCategorie(e.target.value)}
            >
                <option value="" disabled>Sélectionnez une catégorie</option>
                {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                ))}
            </select>
        </div>
        <div>
            <label>Image (URL) :</label>
            <input 
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
        </div>
        <button type="submit">Ajouter</button>
    </form>;
}
