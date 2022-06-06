import axios from "axios";
import React, { useEffect, useState } from "react";
// import Product from "./Product/Product";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios(`http://localhost:8080/products`).then((d) => {
      setProduct(d.data);
      console.log("d", d);
    });
  }, []);
  return (
    <div key={products.id}>
      {products.map((e) => (
        <div key={e.id}>
          {" "}
          <h1>{e.description}</h1>
          <h1>{e.name}</h1>
          <Link to={`/products/${e.id}`}>See More</Link>
          {/* <Product/> */}
        </div>
      ))}
    </div>
  );
};

export default Products;