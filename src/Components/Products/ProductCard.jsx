import React from "react";
import classes from "./products.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormats";
function ProductCard({product}) {
  const {image, title , id, rating, price} = product;
  return (
    <div className={classes.product_container}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div className={classes.product_details}>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount = {price}/>
        </div>
        <button className={classes.btn}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
