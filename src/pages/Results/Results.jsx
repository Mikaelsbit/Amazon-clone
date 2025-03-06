import React, { useState, useEffect } from "react";
import LayOut from "../../Components/Layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../api/endpoints";
import ProductCard from "../../Components/Products/ProductCard";
import classes from "./results.module.css";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [ results, setResults ] = useState([]);
  const { categoryName } =useParams();
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <LayOut>

      {
        results ? (
          <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
        ) : (
          < Loader />
        )
      }
    </LayOut>
  );
}

export default Results;
