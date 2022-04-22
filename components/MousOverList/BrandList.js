import React from "react";
import { Link } from "react-router-dom";

export const BrandLap = ({ Filter }) => {
  return (
    <div className="brand-menu">
      <Link className="brand-link" to="/brand/Asus">
        <span type="button" onClick={() => Filter("ASUS")}>
          Asus
        </span>
      </Link>
      <Link className="brand-link" to="/brand/Lenovo">
        <span onClick={() => Filter("Lenovo")}>Lenovo</span>
      </Link>
      <Link className="brand-link" to="/brand/Apple">
        <span onClick={() => Filter("Apple")}>Apple</span>
      </Link>
      <Link className="brand-link" to="/brand/Hp">
        <span onClick={() => Filter("Hp")}>Hp</span>
      </Link>
      <Link className="brand-link" to="/brand/Acer">
        <span onClick={() => Filter("Acer")}>Acer</span>
      </Link>
    </div>
  );
};
export const BrandTab = () => {
  return (
    <div className="brand-menu">
      <span>Samsoung</span>
      <span>LG</span>
      <span>Apple</span>
      <span>Huawei</span>
      <span>xiaomi</span>
    </div>
  );
};
export const BrandMob = () => {
  return (
    <div className="brand-menu">
      <span>Samsoung</span>
      <span>Black Berry</span>
      <span>LG</span>
      <span>Apple</span>
      <span>Huawei</span>
      <span>xiaomi</span>
    </div>
  );
};
