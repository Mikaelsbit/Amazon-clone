import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Payment from "./pages/Payment/Payment";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Auth from "./pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function Routing() {
  const stripePromise = loadStripe(
    "pk_test_51R2G7aFmV26xWL7saHbkDUSiTfIVRR43IauIaN3ga1D26lnrSl4zcLYLwyqEie8X8AsmPpIeDZwqn6rmz4SCM7zZ001PHva0Ch"
  );
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/payments"
            element={
              <Elements  stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="orders" element={<Orders />} />
          <Route path="/category/:categoryName" element={<Results />} />

          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
