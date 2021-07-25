import React from "react";
import { connect } from "react-redux";
import {
  removeItem,
  decreseItem,
  addItem,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, decreseItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreseItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreseItem: (item) => dispatch(decreseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
