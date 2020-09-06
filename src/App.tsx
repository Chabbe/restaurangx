import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Booking from "./components/booking/Booking";
import Admin from "./components/admin/Admin";
//import "./App.css";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/booking">
          <Booking></Booking>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
