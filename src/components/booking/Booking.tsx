import React, { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import Guest from "../guest/Guest";
import Table from "../table/Table";
import TableModel from "../../models/tableModel";
import GuestModel from "../../models/guestModel";
import { Link } from "react-router-dom";

export default function Booking() {
  const [tables, setTables] = useState({});
  const [guests, setGuests] = useState({});

  const [availabilityMsg, setAvailabilityMsg] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  const [guestValid, setGuestValid] = useState(false);
  const [allValid, setAllValid] = useState(false);
  const [gdpr, setGDPR] = useState(false);

  function postTable(guestId: number) {
    axios
      .post("http://localhost:8000/table", { tables, guestId })
      .then((res) => {
        window.location.replace("http://localhost:3000/cyal8ralig8r");
      });
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

  function makeReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Reservation made", tables);

    axios.post("http://localhost:8000/availability", tables).then((res) => {
      if (res.data.success) {
        axios.post("http://localhost:8000/guest", guests).then((res) => {
          postTable(res.data.guestId);
        });
      }
    });
  }

  useEffect(() => {
    if (guestValid && availabilityMsg === "Time available" && gdpr)
      setAllValid(true);
    else setAllValid(false);
  });

  return (
    <div className="container-fluid p-0 booking">
      <div className="row justify-content-center p-0">
        <form
          onSubmit={makeReservation}
          className="form col-sm-12 col-md-12 col-lg-12 p-0"
        >
          <Table set={setTable} overbooked={availabilityMsg}></Table>
          <Guest
            setValidation={setValidationMsg}
            set={setGuest}
            msg={validationMsg}
            setguestValid={setGuestValid}
            setGPDR={setGDPR}
          ></Guest>
          <div className="reservation-wrapper">
            <button
              type="submit"
              className="make-reservation"
              disabled={!allValid}
            >
              Make a reservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
