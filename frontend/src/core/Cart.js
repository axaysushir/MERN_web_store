import React, { useState, useEffect } from "react";
import "../styles.css";

import API from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";

import StripeCheckout from "./StripeCheckout";
// import Paymentb from './Paymentb'

const Cart = () => {
  const [products, setProducts] = useState([]);
  // reload page
  const [reload, setReload] = useState(false);

  // load all products
  useEffect(() => {
    setProducts(loadCart());
  }, [reload]); // pass [a] for update values

  const loadAllProducts = () => {
    return (
      <div>
        <h4>Cart Items</h4>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            addToCart={false}
            removeFromCart={true}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h4>Products checkout</h4>
      </div>
    );
  };

  return (
    <Base title="🛒 Cart" description="Ready to checkout ☑">
      <div className="row text-center">
  <div className="col-3 mb-3">
    {loadAllProducts()}
  </div>
        <div className="col-9">
          <StripeCheckout products={products} setReload={setReload} />
          {/* <Paymentb products={products} setReload={setReload} /> */}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
