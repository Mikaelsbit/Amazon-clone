const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const stripe = require("stripe")(process.env.STRIPE_KEY);

dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success!",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  
  if (isNaN(total) || total <= 0) {
    return res.status(400).json({
      message: "Total must be a valid number greater than 0",
    });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    
    logger.info("Payment Intent created:", paymentIntent); // Log for debugging

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    logger.error("Error creating payment intent:", error); // Log the error
    res.status(500).json({
      error: error.message,
    });
  }
});

exports.api = onRequest(app);
