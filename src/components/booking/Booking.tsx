import React, { useEffect, useState } from "react";
import axios from "axios";
import Guest from "../guest/Guest";
import Table from "../table/Table";
import TableModel from "../../models/tableModel";
import GuestModel from "../../models/guestModel";

export default function Booking() {
  const [tables, setTables] = useState({});
  const [guests, setGuests] = useState({});
  const [msg, setMsg] = useState("");
  



  function postTable(guestId:number) {
    console.log(guestId)
    axios.post("http://localhost:8000/table", {tables, guestId}).then((res) => {});
  }

  function setGuest(guestObject: GuestModel) {
    setGuests(guestObject);
  }

  function setTable(tableObject: TableModel) {
    setTables(tableObject);
  }

  function makeReservation(guestObject: GuestModel) {
    setGuest(guestObject);
    
    axios.post("http://localhost:8000/availablility", tables).then((res) => {
      if (!res.data.success) setMsg("fail");
      else {
        setMsg("success");
        console.log("hej")
        axios.post("http://localhost:8000/guest", guests).then((res) => {
          postTable(res.data.guestId);
        });
      }
    });
  }

  function deleteAll() {
    axios.post("http://localhost:8000/deleteall");
  }

  return (
    <div>
      <form>
        <p>{msg}</p>
        <Table set={setTable}></Table>
        <Guest post={makeReservation} set={setGuest}></Guest>
        <button onClick={deleteAll}>delete all</button>
      </form>
    </div>
  );
}
