import React, { useState } from 'react';
const ProductForm = ({ addProduct }) => {
    // État pour gérer les champs du formulaire
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(''); 
    const [thumbnail, setThumbnail]=useState('');

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !description || !thumbnail) {
      alert('Veuillez remplir tous les champs !');
      return;
    }
    addProduct({ title, price: parseFloat(price), description, thumbnail});
    setTitle('');
    setPrice('');
    setDescription('');
    setThumbnail('');
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>Ajouter un Produit</h2>
      <div>
        <label>Titre :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
                  />
      </div>
      <div>
        <label>Prix :</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        
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
        <label>Image (URL) :</label>
        <input
          type="text"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
       
        />
      </div>
      <button type="submit" >
        Ajouter
      </button>
    </form>
  );


};
export default ProductForm;