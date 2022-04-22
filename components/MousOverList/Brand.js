import React from "react";
import { Link } from "react-router-dom";
export const Brand = ({ menuItem }) => {
  return (
    <div>
      {Array.isArray(menuItem) &&
        menuItem.map((item) => {
          return (
            <div className="brand-page" key={item.id}>
              <div className="container">
                <img src={item.pic} className="card-img-top" />
                <h5 className="card-title">{item.title}</h5>
                <p className="text-success">{item.price}</p>
                <Link to={"/detail/" + item.id}>
                  <span className="btn btn-primary">Show More</span>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};
