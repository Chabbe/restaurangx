import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Booking from "./components/booking/Booking";
import Admin from "./components/admin/Admin";
import Confirmation from "./components/confirmation/Confirmation";
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
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route path="/cyal8ralig8r">
          <Confirmation></Confirmation>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    
=======
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
>>>>>>> 123f2e9e7a7f7ba2b94d0ba3fa911eb137554de2
  );
}

export default App;
