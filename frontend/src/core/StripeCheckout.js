import React, { useState } from "react";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { Link, Redirect, useHistory } from "react-router-dom";
import StripeButton from "react-stripe-checkout";
import API from "../backend";
import createOrder from '../core/helper/orderHelper'

const StripeCheckout = ({
  products,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [data, setDate] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });
  
  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalTotal = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });
    if (amount === 0) {
      return <h5 className='text-warning'>Cart Is Empty !</h5>;
    } else {
      return amount;
    }
  };

  const makePayment = (token) => {
    const body = {
      token,
      products,
    }
    const headers = {
      "Content-Type": "application/json"
    }
    return fetch(`${API}/stripepayment`, {
      method: "POST",
      headers, 
      body: JSON.stringify(body)
    })
    .then(response => {
      // console.log(response)
      // create method
      const {status} = response
      // console.log('STATUS', status)
    })
    .then(() => {
      return (
        alert('Payment Successful'),
        cartEmpty()
      )
    })
    .catch(err => console.log(err))
  }

  const showStripeButton = () => {
    return isAuthenticated() ? (
      <StripeButton
        stripeKey={process.env.REACT_APP_STRIPE_PTEST_KEY}
        token={makePayment}
        amount={getFinalTotal() * 100}
        name="Buy Tshirts"
        shippingAddress
        billingAddress
      >
        <button className="btn btn-success">Pay with stripe</button>
      </StripeButton>
    ) : (
      <Link to="/signin">
        <button className="btn btn-warning">Signin</button>
      </Link>
    );
  };

  return (
    <div>
      <h3 className="text-white">Stripe Checkout ₹{getFinalTotal()}</h3>
      {showStripeButton()}
    </div>
  );
};
export default StripeCheckout;
