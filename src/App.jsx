import React, { useState, useEffect } from "react";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

export default function App() {
  const [product, setProduct] = useState({
    name: "Indomie",
    price: 5.55,
  });

  const makePayment = (token) =>{
    const body = {
      token,
      product
    }
    axios.post("http://localhost:4242/payment", body).then((res)=> console.log(res)).catch((err)=> console.log(err))
  }
  return(
    <>
      <h1>Stripe</h1>
      <StripeCheckout
       stripeKey="pk_test_51MZnT6HXwt4BpIBQAyCb0LxDAclJ2qxMU1KlO8Lle2NawVWVDK5LPcma7hUIGGBRMMMYzJDo3v1WHCzi7hOEVh9E00xUfeIGEM" 
       token={makePayment}
       amount={product.amount * 100}
      name="Buy Noodles"/>
    </>
  )
}