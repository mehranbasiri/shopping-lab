import React from "react";
import { cartStore, removeFromCart } from "../product";

export const Cart = ({ products }) => {
  const removeHandler = (product) => {
    cartStore.dispatch(removeFromCart(product));
  };
  if (!products || !products.length) {
    return <div className="cart-empty">Cart is Empty</div>;
  } else {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">pic</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th> <th scope="col">Quantity</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img width="50" src={product.pic} />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  onClick={() => removeHandler(product)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};
