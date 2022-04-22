import React, { Component } from "react";

import { Cart } from "../components/cart";
import { cartStore } from "../components/product";

export class CartPage extends Component {
  state = {};
  componentDidMount() {
    this.setState({ products: cartStore.getState() });
    this.unsubscribe = cartStore.subscribe(() =>
      this.setState({ products: cartStore.getState() })
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="cart-box">
        <Cart products={this.state.products} />
      </div>
    );
  }
}
/*export const CartPage = () => {
  const [removeCart, setRemoveCart] = useState();
  useEffect(() => {
    setRemoveCart({ products: cartStore.getProduct() });
    const unsubscribe = cartStore.subscribe(() => {
      setRemoveCart({ products: cartStore.getProduct() });
    });
    setRemoveCart(unsubscribe);
  });
  return (
    <div className="cart-box">
      <Cart products={removeCart.products} />
    </div>
  );
}; */
