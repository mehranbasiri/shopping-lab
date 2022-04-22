import React, { Component } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { cartStore } from "../product";
export class CartIcon extends Component {
  state = {};
  componentDidMount() {
    this.unsubscribe = cartStore.subscribe(() =>
      this.setState({ count: cartStore.getState().length })
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div className="cart-icon">
        <ShoppingCartIcon fontSize="large" />
        {this.state.count > 0 && (
          <span className="cart-number">{this.state.count}</span>
        )}
      </div>
    );
  }
}

/*
export const CartIcon = () => {
  const [cartState, setCartState] = useState();
  useEffect(() => {
    cartStore.subscribe(() =>
      setCartState({ count: cartStore.getState().length })
    );
  });
  return (
    <div className="cart-icon">
      <ShoppingCartIcon fontSize="large" />
      {cartState.count > 0 && (
        <span className="cart-number">{cartState.count}</span>
      )}
    </div>
  );
};
*/
