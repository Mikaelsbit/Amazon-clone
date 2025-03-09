import React, { useContext } from "react";
import LayOut from "../../Components/Layout/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormats";
import { Link } from "react-router-dom";
import classes from './cart.module.css';
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount , item) => {
    return item.price + amount
  }, 0)
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>your shopping basket</h3>
          <hr />

          {basket?.length == 0 ? (
            <p>Oopps ! No item in your cart</p>
          ) : (
            basket?.map((item,i) => {
              return <ProductCard 
              product={item}
              renderDesc={true}
              flex={true}
              key={i}
              renderAdd={false}
              />;
            })
          )}
        </div>
        {
          basket?.length !==0 && (
            <div className={classes.subtotal}>
              <div>
                <p>subtotal ({basket?.length} items)</p>
                <CurrencyFormat amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains gift</small>
              </span>
              <Link to="/payments">Continue to checkout</Link>
            </div>
          )
        }
      </section>
    </LayOut>
  );
}

export default Cart;
