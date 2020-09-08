import React, { useState, useEffect } from "react";
import "./App.css";
import ProductSelect from "./components/ProductSelect/index";

function App() {
  let [basket, setBasket] = useState<string[]>([]);

  const updateBasket = (product: string) => {
    basket.push(product);
    setBasket(basket);
  };

  useEffect(() => {
    fetch("/hello")
      .then((response) => response.json())
      .then((response) => console.log(response));
  });

  return (
    <div className="App">
      <ProductSelect name="PL123456" onSubmit={updateBasket} />
      <ProductSelect name="PL513872" onSubmit={updateBasket} />
      <ProductSelect name="PL999999" onSubmit={updateBasket} />
    </div>
  );
}

export default App;
