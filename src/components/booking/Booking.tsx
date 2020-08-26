import React, { useEffect, useState } from "react";
import axios from "axios";
import Guest from "../guest/Guest";
import Table from "../table/Table";
import TableModel from "../../models/tableModel";
import GuestModel from "../../models/guestModel";

export default function Booking() {
  const [tables, setTables] = useState({});
  const [guests, setGuests] = useState({});
  
  // useEffect(() => {
  //   axios.get("http://localhost:8000/table").then((res) => {
  //     console.log(res.data);
  //     setTables(res.data);
  //   });

  // }, []);
  // useEffect(() => {
  //   axios.get("http://localhost:8000/guest").then((res) => {
  //     console.log(res.data);
  //     setGuests(res.data);
  //   });
  // }, []);

  function setGuest(guestObject: GuestModel){
    setGuests(guestObject);
  }
  
  function setTable(tableObject: TableModel){
    setTables(tableObject);
  }

  function makeReservation(guestObject: GuestModel){

    setGuest(guestObject);

    axios.post("http://localhost:8000/table", tables);
    axios.post("http://localhost:8000/guest", guests);

  }


  return (
    <div>
      <form>
        <Table set={setTable}></Table>
        <Guest post={makeReservation}></Guest>
      </form>
    </div>
  );
}
