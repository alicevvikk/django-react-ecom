import React, { useEffect, useState } from "react";
import {CardComponent, SliderComponent} from './'


import { getProducts } from "../lookup";


export function Home(props) {
  const { cart, setCart } = props;
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
        <CardComponent products={products} cart = {cart} setCart = {setCart}></CardComponent>
        
      </div>
    </div>
  );
}

