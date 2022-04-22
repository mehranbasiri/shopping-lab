import React from "react";

import { Link } from "react-router-dom";
import { CartIcon } from "../cart";
import { UserName } from "../Login";
import { BrandLap, BrandMob, BrandTab } from "../MousOverList";

import { Search } from "./search";

export function Navbar({ Filter }) {
  return (
    <div className="navbar">
      <h1 className="navbar-brand">Shopping Lab</h1>
      <UserName />
      <div className="line"></div>
      <div className="nav-item">
        <Link className="link" to="/">
          <h5>Home</h5>
        </Link>
        <Link className="brand-link" to="/">
          <h5 className="brand-button">LapTap</h5> <BrandLap Filter={Filter} />
        </Link>
        <Link className="brand-link" to="/tablet">
          <h5 className="brand-button">Tablet</h5>
          <BrandTab />
        </Link>
        <Link className="brand-link" to="/mobile">
          <h5 className="brand-button">Mobile</h5>
          <BrandMob />
        </Link>
      </div>
      <Link to="/cart">
        <CartIcon />
      </Link>

      <Search />
    </div>
  );
}
