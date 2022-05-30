import axios from "axios";
import React, { useEffect, useState } from "react";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  
    const [productData, setProductData] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setlimit] = useState(3)
    const [total, setTotal] = useState(0)

    useEffect(() => {
      axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((r) => {
        setProductData(r.data)
        setTotal(Number(r.headers["x-total-count"]))
      
    })
    }, [page, limit])
    console.log(productData);
  
  return (
    productData.map((products) => {
      <Stack data-cy="product">
      <Image data-cy="product-image" />
        <Text data-cy="product-category">{products.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
        <Heading data-cy="product-title">{products.title}</Heading>
        <Box data-cy="product-price">{ products.price}</Box>
     
    </Stack>
  
    })
   
  );
};

export default Product;
