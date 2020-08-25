import React, { useEffect } from "react";
import axios from "axios";
import Guest from "./components/guest/Guest";
import Booking from "./components/booking/Booking";
import "./App.css";

function App() {

  return (
    <div>
      <Guest dataFromApi={bookings}></Guest>
      <Booking></Booking>
    </div>
  );
}

export default App;
