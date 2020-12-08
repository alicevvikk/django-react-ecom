import React, { useEffect, useState } from "react";
import CardComponent from "./homeCard";
import SliderComponent from "./slider";
import { getProducts } from "../lookup";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const myCallBack = (response, status) => {
      console.log(typeof response, response);
      if (status === 200) {
        setProducts(response);
      }
    };
    getProducts(myCallBack);
  }, []);
  return (
    <div>
      <div className="slider-component">
        <SliderComponent></SliderComponent>
      </div>

      <div className="card-component">
        <CardComponent products={products}></CardComponent>
      </div>
    </div>
  );
}
export default Home;
