import "./App.css";
import Products from "./Products";
import ProductForm from "./Addprod";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      title: "PC Portable Gamer HP VICTUS",
      price: "7490 DH",
      thumbnail: "HP16D0195NF.jpg",
    },
    {
      title: "PC Portable Gamer HP VICTUS",
      price: "2190 DH",
      thumbnail: "HP14424U3EA.jpg",
    },
    {
      title: "Pc Portable Chromebook Acer",
      price: "3640 DH",
      thumbnail: "NXATHEF002.jpg",
    },
    {
      title: "PC Portable - HUAWEI",
      price: "1270 DH",
      thumbnail: "HUA6901443442959.jpg",
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="App">
      <ProductForm addProduct={addProduct} />
      <h1>Nos Produits</h1>
      <Products lproducts={products} />
    </div>
  );
}

export default App;
