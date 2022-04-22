import React, { Component } from "react";

import { ProductList, productService } from "../components/product";
import { TitleSlide } from "../components/Slider";

export class HomePage extends Component {
  state = { products: [] };
  fetchData() {
    productService
      .getProduct(this.props.location.search)
      .then((Response) => this.setState({ products: Response.data }));
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate() {
    this.fetchData();
  }
  render() {
    return (
      <>
        <TitleSlide />
        <div className="container">
          <div className="row">
            <ProductList products={this.state.products} />
          </div>
        </div>
      </>
    );
  }
}
