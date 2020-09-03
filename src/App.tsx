import React from "react";
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
>>>>>>> 44f27bed047bc7b943d20cdf654fd0cb9df43727
import Booking from "./components/booking/Booking";
import Admin from "./components/admin/Admin";
//import "./App.css";
import Home from "./components/home/Home";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/">
          <Booking></Booking>
        </Route>
      </Switch>
    </Router>
=======
    <div className="container-fluid">
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
    </div>
>>>>>>> 44f27bed047bc7b943d20cdf654fd0cb9df43727
  );
}

export default App;
