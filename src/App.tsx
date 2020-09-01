import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Booking from "./components/booking/Booking";
import "./App.css";
import Admin from "./components/admin/Admin";

function App() {

  return (
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
  
  );
}

export default App;
