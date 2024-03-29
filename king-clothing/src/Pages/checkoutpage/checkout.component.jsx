import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
        </div>
      <div className="header-block">
        <span>description</span>
        </div>
      <div className="header-block">
        <span>Quantity</span>
        </div>
      <div className="header-block">
        <span>Price</span>
        </div>
      <div className="header-block">
        <span>Remove</span>
        </div>
    </div>
    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    }
    <div className="total"><span> Total: ${total}</span></div>
  </div>
);

const mapStateTorprops = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateTorprops)(CheckoutPage);