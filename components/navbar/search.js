import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export function Search() {
  const [state, setState] = useState();
  const history = useHistory();
  const submitHandler = (e) => {
    e.target.reset();
    e.preventDefault();
    history.push("/?q=" + state);
  };
  return (
    <form onSubmit={submitHandler} className="search-box">
      <input
        className="form-control "
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setState(e.target.value)}
      />
      <button className="btn btn-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}
