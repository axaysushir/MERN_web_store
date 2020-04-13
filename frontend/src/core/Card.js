import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { Redirect } from "react-router-dom";

const Card = ({
  product,
  addToCart = true,
  removeFromCart = false,
  reload = undefined,
  setReload= f => f,
  // function(f) {return f} anonymous func
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo from paxels";
  const cartDescription = product
    ? product.description
    : "Lorem ipsum dolor sit";
  const cartPrice = product ? product.price : "Default";

  const addToACart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };
  const showAddToCart = () => {
    return (
      addToCart && (
        <button
          onClick={addToACart}
          className="btn btn-block btn-outline-primary mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };
  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload)
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className="card text-white bg-card card-rounded border border-info ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        {getRedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-primary font-weight-normal text-wrap">
          {cartDescription}
        </p>
        <p className="btn btn-primary rounded  btn-sm px-4">₹ {cartPrice}</p>
        <div className="row">
          {/* if not work add (addToCart) */}
          <div className="col-12">{showAddToCart()}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
