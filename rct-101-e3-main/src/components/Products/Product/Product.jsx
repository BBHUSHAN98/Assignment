import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api
  // const product = { id: 1 };
  const {addToCart ,removeCart} =useContext(CartContext);
  const [product ,setProduct] = useState({});
  const {id} = useParams();
  console.log("id",id)
  useEffect(()=>{
    if(id){
      axios.get(`http://localhost:8080/products/${id}`).then((d)=>{
        setProduct(d.data)
console.log("d.data",d.data)
      })
    }
  },[id])

  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={addToCart}>Add To cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button" onClick={removeCart}>Remove</button>
      </div>
    </div>
  );
};

export default Product;
