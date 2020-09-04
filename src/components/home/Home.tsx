import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="row backgroundWrapper">
      <div className="align-self-center">
        {/* <p className="restaurangx">
          restaurang X
        </p> */}
        <p className="restaurangx">
          <div id="R">r</div>e<div id="S">s</div>tau<div id="RANG">rang</div> X
        </p>
        <div className="row">
        <Link to="/booking">
          <button className="align-self-center glow-on-hover">
            Get a table
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}
