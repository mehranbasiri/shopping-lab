import React from "react";
import { Product } from "./product";

export function ProductList({ products }) {
  return (
    <div>
      {products.map((item, index) => (
        <div key={index}>
          <Product data={item} />
        </div>
      ))}
    </div>
  );
}
