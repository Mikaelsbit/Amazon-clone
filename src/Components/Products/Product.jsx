import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from './products.module.css'
import ProductCard from "./ProductCard";
import Loader from "../Loader/Loader";
function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
     .then((res) => {
      setProducts(res.data);
    })
    .catch((err) => {
      console.log(err)
    });
  }, []);
  return (
    <section className={classes.product_outer}>

      
{products ? (
        products.map((singleProduct) => (
          <ProductCard renderAdd={true}  product = {singleProduct} key={singleProduct.id}/>
        ))
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default Product;
