import React, { useEffect, useState } from "react";
import LayOut from "../../Components/Layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../api/endpoints";
import ProductCard from "../../Components/Products/ProductCard";
import Loader from '../../Components/Loader/Loader.jsx'

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <LayOut>
      {product ? (
        <ProductCard product={product} 
        flex = {true} 
        renderDesc ={true}
        renderAdd={true}
        />
        
      ) : (
        <Loader />
      )}
    </LayOut>
  );
}

export default ProductDetail;
