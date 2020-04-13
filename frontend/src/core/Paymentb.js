import React, { useState, useEffect } from "react";
import { loadCart, cartEmpty } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import { getmeToken, processPayment } from "./helper/paymentHelper";
import { createOrder } from "./helper/orderHelper";
import { isAuthenticated } from "../auth/helper";

import DropIn from "braintree-web-drop-in-react";
import API from "../backend";
const userId = isAuthenticated() && isAuthenticated().user._id;
const token = isAuthenticated() && isAuthenticated().token;

class Paymentb extends React.Component {
    instance;
   
    state = {
      clientToken: null,
    };
    
   
    async componentDidMount() {
      // Get a client token for authorization from your server
      const response = await fetch(`${API}/payment/gettoken/${userId}`);
      const clientToken = await response.json(); // If returned as JSON string
   
      this.setState({
        clientToken,
      });
    }
   
    async buy() {
      // Send the nonce to your server
      const { nonce } = await this.instance.requestPaymentMethod();
      await fetch(`server.test/purchase/${nonce}`);
    }
   
    render() {
      if (!this.state.clientToken) {
        return (
          <div>
            <h1>Loading...</h1>
          </div>
        );
      } else {
        return (
          <div>
            <DropIn
              options={{ authorization: this.state.clientToken }}
              onInstance={(instance) => (this.instance = instance)}
            />
            <button onClick={this.buy.bind(this)}>Buy</button>
          </div>
        );
      }
    }
  }

  export default Paymentb