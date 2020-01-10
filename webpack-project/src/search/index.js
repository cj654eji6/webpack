"use strict";

import React from "react";
import ReactDOM from "react-dom";
import logo from "./images/logo.svg";
import "../../common";
import "./search.less";
import { a } from "./tree-shaking";

class Search extends React.Component {
  render() {
    const funcA = a();
    return (
      <div className="search-text">
        {funcA}Search Text Hello
        <img src={logo} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
