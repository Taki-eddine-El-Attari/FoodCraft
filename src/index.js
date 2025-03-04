import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header/Header.js";
import Textform from "./Forms/Textform.js";
import Fruits from "./Fruits/Fruits.jsx";
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
const fruitarray = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Mango'];
root.render(
  <React.StrictMode>
    <Header Name='Taki eddine'/>
    <Textform inputname ='lastname' labelname = 'Last Name' >
      <p>Some children</p>
    </Textform>
    <Textform inputname ='firstname' labelname = 'First Name' >
      <p>Another children</p>
    </Textform>
    <Fruits fruits={fruitarray} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
