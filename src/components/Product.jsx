import React from "react";
import "../App.css";


const ProductDisplay = () => (
    <section>
      <div className="product">
        <img
          src="http://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
        </div>
      </div>
      <form action="http://localhost:4242/create-checkout-session" method="POST">
        <button type="submit">
          Checkout
        </button>
      </form>
    </section>
  );

  export default ProductDisplay