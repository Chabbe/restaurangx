import React, { useState } from "react";
import axios from "axios";
import Guest from "../guest/Guest";
import Table from "../table/Table";
import TableModel from "../../models/tableModel";
import GuestModel from "../../models/guestModel";

export default function Booking() {
  const [tables, setTables] = useState({});
  const [guests, setGuests] = useState({});
  const [availabilityMsg, setAvailabilityMsg] = useState("");
  const [validationMsg, setValidationMsg] = useState("");
  const [scrollClass, setScrollClass] = useState("");

  function postTable(guestId: number) {
    axios
      .post("http://localhost:8000/table", { tables, guestId })
      .then((res) => {});
  }

  function setGuest(guestObject: GuestModel) {
    setGuests(guestObject);
  }

  function setTable(tableObject: TableModel) {
    console.log(tableObject);
    setTables(tableObject);
    if (tableObject.time > 0) checkAvailability(tableObject);
  }

  function checkAvailability(tableObject: TableModel) {
    axios
      .post("http://localhost:8000/availability", tableObject)
      .then((res) => {
        if (!res.data.success) {
          if (res.data.othersuccess)
            setAvailabilityMsg(
              "Overbooked but available at " +
                (tableObject.time === 21 ? 18 : 21) +
                ":00"
            );
          else setAvailabilityMsg("Overbooked");
        } else setAvailabilityMsg("Time available");
      });
  }

  function makeReservation(guestObject: GuestModel) {
    if (validationMsg !== "") return;

    console.log("Reservation made", tables);
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

  function next() {
    setScrollClass("scroll");
  }
  function back() {
    setScrollClass("scrollBack");
  }
  return (
    <div className={scrollClass + " container-fluid p-0 booking"}>
      <div className="row justify-content-center p-0">
        <form className="form col-sm-12 col-md-12 col-lg-12 p-0">
          <Table
            set={setTable}
            overbooked={availabilityMsg}
            next={next}
          ></Table>
          <Guest
            post={makeReservation}
            setValidation={setValidationMsg}
            set={setGuest}
            back={back}
            msg={validationMsg}
          ></Guest>
       
         
        </form>
      </div>
    </div>
  );
}
