import React, { useEffect, useState } from "react";
import axios from "axios";
import Guest from "../guest/Guest";
import Table from "../table/Table";
import TableModel from "../../models/tableModel";
import GuestModel from "../../models/guestModel";

export default function Booking() {
  const [tables, setTables] = useState([]);
  const [guests, setGuests] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:8000/table").then((res) => {
      console.log(res.data);
      setTables(res.data);
    });

  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/guest").then((res) => {
      console.log(res.data);
      setGuests(res.data);
    });
  }, []);

  function postBooking(guestObject: GuestModel){
    axios.post("http://localhost:8000/guest", guestObject);
  }

  return (
    <div>
      <form>
        <Table data={tables}></Table>
        <Guest data={guests} post={postBooking}></Guest>
      </form>
    </div>
  );
}
