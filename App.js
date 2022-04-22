import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/navbar";
import "./Styles/app.scss";
import { HomePage, DetailPage, CartPage } from "./Pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CreateAccount } from "./components/Login";

import { productService } from "./components/product";
import { Brand } from "./components/MousOverList";

function App() {
  const [menuItem, setMenuItem] = useState([]);
  const [data, setData] = useState(null);

  const Filter = (button) => {
    console.log(button);

    productService.getProduct().then((Response) => {
      setData(Response.data.filter((item) => item.Brand == button));
    });
    console.log(data);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar Filter={Filter} />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/detail/:detailId" component={DetailPage} />
            <Route path="/cart" children={<CartPage />} />
            <Route path="/createAccount">
              <CreateAccount />
            </Route>
            <Route path="/brand/:Name">
              <Brand menuItem={data} />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
