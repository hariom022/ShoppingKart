import React from "react";
import "./Cart.scss";

const Cart = (props) => {
  let { cartItem, HandleAddProduct, HandleRemoveProduct, clearCartHandler } =
    props;

  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-item">
      <div className="cart-item-header">Cart Items</div>
      {cartItem.length === 0 && (
        <div className="cart-item-empty">No item added to the cart</div>
      )}
      {cartItem.length >= 1 && (
        <div className="clear-button">
          <button onClick={() => clearCartHandler()}>Clear</button>
        </div>
      )}

      <div>
        {cartItem.map((item) => (
          <div key={item.id} className="cart-item-list">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cat-item-name">{item.title.substring(0, 30)}</div>

            <div className="Cart-item-function">
              <button
                className="cart-item-add"
                onClick={() => HandleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-item-remove"
                onClick={() => HandleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="price">
              {item.quantity} * ${item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-item-total-price-name">
        Totl Price
        <div className="cart-item-total-price">${totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;