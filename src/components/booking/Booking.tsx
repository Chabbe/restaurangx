import React, { useState } from "react";
import axios from "axios";
import Guest from "../guest/Guest";
import Table from "../table/Table";
import TableModel from "../../models/tableModel";
import GuestModel from "../../models/guestModel";

export default function Booking() {
  const [tables, setTables] = useState({});
  const [guests, setGuests] = useState({});
  const [msg, setMsg] = useState("");
  const [availabilityMsg, setAvailabilityMsg] = useState("");

  function postTable(guestId: number) {
    console.log(guestId);
    axios
      .post("http://localhost:8000/table", { tables, guestId })
      .then((res) => {});
  }

  function setGuest(guestObject: GuestModel) {
    setGuests(guestObject);
  }

  function setTable(tableObject: TableModel) {
    setTables(tableObject);
    if (tableObject.time > 0) checkAvailability(tableObject);
  }

  function checkAvailability(tableObject: TableModel) {
    axios
      .post("http://localhost:8000/availability", tableObject)
      .then((res) => {
        if (!res.data.success) {
          console.log(res.data.success);
          if (res.data.othersuccess) {
            console.log(res.data.othersuccess);
            setAvailabilityMsg("Fullbokat, men ledigt XX");
          } else {
            setAvailabilityMsg("Fullbokat");
          }
        } else {
          setAvailabilityMsg("Ledigt, välkommen att boka");
        }
        console.log("success", res.data.success);
        console.log("othersuccess", res.data.othersuccess);
      });
  }

  function makeReservation(guestObject: GuestModel) {
    setGuest(guestObject);

    axios.post("http://localhost:8000/availability", tables).then((res) => {
      if (res.data.success) {
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
        <p>{availabilityMsg}</p>
        <Table set={setTable}></Table>
        <Guest post={makeReservation} set={setGuest}></Guest>
        <button onClick={deleteAll}>delete all</button>
      </form>
    </div>
  );
}
