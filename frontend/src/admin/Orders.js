import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";

const Order = () => {
  const { user: {name, email, role} } = isAuthenticated();

    
  return (
    <Base title="Manage orders" description="Manage your all orders">
      <div className="row">
       
      </div>
    </Base>
  );
};

export default Order;
