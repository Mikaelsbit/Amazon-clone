import React, { useContext, useState } from "react";
import LayOut from "../../Components/Layout/LayOut";
import classes from "./payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";

import ProductCard from "../../Components/Products/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormats";

function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();
  const [CardError, setCardErr] = useState(null);

  const handleChange = (e) => {
    console.log(e);
    e?.error?.message ? setCardErr(e?.error?.message) : setCardErr("");
  };

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  return (
    <LayOut>
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>

      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email} </div>
            <div>123 golgol st</div>
            <div>virginia, Al</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((items) => (
              <ProductCard product={items} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details} >
              <form action="">
                {
                  CardError && <small style={{color: "red"}}>{CardError}</small>
                }
                <CardElement onChange={handleChange} />

                <div className={classes.payment_price}>
                  <div>
                    <span style={{display: "flex", gap: "10px"}}>
                      <p>Total Order |</p> <CurrencyFormat amount={total}/>
                    </span>
                  </div>

                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
