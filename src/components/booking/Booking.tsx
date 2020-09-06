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

  function postTable(guestId: number) {
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
          if (res.data.othersuccess) {
            setAvailabilityMsg(
              "Fullbokat men ledigt på " +
                (tableObject.time === 21 ? 18 : 21) +
                ":00"
            );
          } else {
            setAvailabilityMsg("Fullbokat");
          }
        } else {
          setAvailabilityMsg("Ledigt, välkommen att boka");
        }
      });
  }

  function makeReservation(guestObject: GuestModel) {
    if (
      validationMsg !== "" ||
      availabilityMsg !== "Ledigt, välkommen att boka"
    )
      return;

    console.log("Reservation made");
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
    <div className="container-fluid p-0">
      <div className="row justify-content-center p-0">
        <form className="form col-sm-12 col-md-12 col-lg-12 p-0">
          <Table set={setTable} setValidation={setValidationMsg}></Table>
          <Guest
            post={makeReservation}
            setValidation={setValidationMsg}
            set={setGuest}
            ></Guest>
            <p>{availabilityMsg}</p>
            <p>{validationMsg}</p>
          <div className="mt-5">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={deleteAll}
            >
              delete all
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
