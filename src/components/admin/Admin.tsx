import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import Filter from "../filter/Filter";
import TableModel from "../../models/tableModel";

export default function Admin() {
  const [tableData, setTableData] = useState([]);
  const [updatedTable, setUpdatedTable] = useState({
    date: new Date(),
    time: 0,
    count: 0,
  });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getTableData();
  }, []);

  function getTableData() {
    axios.get("http://localhost:8000/table").then((res) => {
      setTableData(res.data);
    });
  }

  function updateTable(event: ChangeEvent<HTMLInputElement>) {
    setUpdatedTable({
      ...updatedTable,
      [event.target.name]:
        event.target.name === "date"
          ? new Date(event.target.value)
          : parseInt(event.target.value),
    });
  }

  function unbook(id: number) {
    axios
      .delete("http://localhost:8000/unbook/" + id)
      .then(() => getTableData());
  }

  function editBooking(id: number) {
    axios
      .post("http://localhost:8000/availability", updatedTable)
      .then((res) => {
        if (res.data.success) {
          axios
            .put("http://localhost:8000/edit/" + id, updatedTable)
            .then((res) => getTableData());
          setMsg("bokning ändrad");
        } else if (res.data.othersuccess) {
          console.log("fullbokat men ledigt på other");
          setMsg("Fullbokat men ledigt på andra tiden");
        } else {
          setMsg("fullbokat");
        }
      });
  }

  function edit(id: number) {
    return (
      <div className="row justify-content-center mt-1">
        <div className="col-2"></div>
        <div className="col-2">
          <input
            type="date"
            name="date"
            placeholder="date"
            onChange={updateTable}
          />
        </div>
        <div className="col-2">
          {" "}
          <input
            type="text"
            name="time"
            placeholder="time"
            onChange={updateTable}
          />
        </div>
        <div className="col-2">
          <input
            type="text"
            name="count"
            placeholder="count"
            onChange={updateTable}
          />
        </div>
        <div className="col-2"> </div>
        <div className="col-2">
          <button className="admninBtn" onClick={() => editBooking(id)}>
            edit
          </button>
        </div>
      </div>
    );
  }

  function getData(data: any) {
    setTableData(data);
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 mt-4 adminHeader">
        <h2 className="adminHeaderText">Restaurang X</h2>
      </div>
      <div className="col-12">
        <Filter sendData={getData} reset={getTableData}></Filter>
      </div>
      <div className="col-12 changedMsg">
        <span>{msg}</span>
      </div>

      {tableData.map((data: TableModel, index) => {
        return (
          <div className="col-9">
            <div className="row blackBorder mt-1" key={index}>
              <div className="col-2">id: {data.id}</div>
              <div className="col-2">
                date: {data.date.toString().slice(0, 10)}
              </div>
              <div className="col-2">time: {data.time} </div>
              <div className="col-2">count: {data.count}</div>
              <div className="col-2"> guestId: {data.guestId}</div>
              <div className="col-2">
                <button
                  className="admninBtn"
                  onClick={() => {
                    unbook(data.id);
                  }}
                >
                  unbook
                </button>
              </div>
            </div>

            {edit(data.id)}
          </div>
        );
      })}
    </div>
  );
}
