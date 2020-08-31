import React, { useEffect, useState } from "react";
import axios from "axios";
import Guest from "../guest/Guest";
import Table from "../table/Table";
import TableModel from "../../models/tableModel";

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
      setGuests(res.data)
    });
  }, []);

  function postBooking(data: TableModel) {
    axios.post("http://localhost:8000/table", data).then((res)=>{
    })
  }

  return (
    <div>
      <form>
        <Guest data={guests}></Guest>
        <Table data={tables} post={postBooking}></Table>
      </form>
    </div>
  );
}
