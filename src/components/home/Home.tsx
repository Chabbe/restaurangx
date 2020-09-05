import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="row backgroundWrapper">
      <div className="align-self-center">
        <div className="row">
        <p className="restaurangx">restaurang X</p>
        
        </div>
        <div className="row">
          <Link to="/booking">
            <div id="booking-button">Get a table</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
